import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const allUsers = await prisma.membership.findMany()
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const {
      user_id,
      active,
      total_redemptions,
      remaining_redemptions,
      pass_id,
    } = req.body
    const result = await prisma.user.create({
      data: {
        user_id,
        active,
        total_redemptions,
        remaining_redemptions,
        pass_id,
      },
    })
    return res.json(result)
  }
}
