import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const { id } = req.query
  const { duration } = req.body

  if (req.method == 'PUT') {
    const updateTime = await prisma.timer.update({
      where: { id: Number(id) },
      data: {
        duration: duration,
      },
    })

    return res.json(updateTime)
  } else if (req.method == 'GET') {
    const currentTime = await prisma.timer.findUnique({
      where: { id: Number(id) },
    })
    return res.json(currentTime)
  }
}
