import prisma from '../../../../lib/prisma'

let time = 600 // 10 minutes
let interval

const startCountdown = async () => {
  const countdowns = await prisma.countdowns()
  if (countdowns.length === 0) {
    await prisma.createCountdown({
      time: 600,
    })
  } else {
    time = countdowns[0].time
  }
  interval = setInterval(async () => {
    time--
    await prisma.updateCountdown({
      where: { id: countdowns[0].id },
      data: { time },
    })
    if (time === 0) {
      clearInterval(interval)
    }
  }, 1000)
}

startCountdown()

export default async function handler(req, res) {
  const countdowns = await prisma.countdowns()
  res.json({
    time: countdowns[0].time,
  })
}
