import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const { id } = req.query
  const { duration, activated, membership_id, remaining_redemptions } = req.body

  if (req.method == 'PUT') {
    const updateTime = await prisma.membership.update({
      where: { membership_id: Number(id) },
      data: {
        duration: duration,
        activated: activated,
        remaining_redemptions: remaining_redemptions,
      },
    })

    return res.json(updateTime)
  } else if (req.method == 'GET') {
    const currentTime = await prisma.membership.findUnique({
      where: { membership_id: Number(id) },
    })
    return res.json(currentTime)
  }
}
