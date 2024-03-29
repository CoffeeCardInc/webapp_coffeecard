import prisma from '../../../../lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    // Not Signed in
    res.status(401).json({ message: 'You must be logged in' })
    return
  }
  if (req.method == 'GET') {
    const allUsers = await prisma.membership.findMany({
      where: {
        userId: session.user.id,
      },
    })
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const {
      userId,
      active,
      total_redemptions,
      remaining_redemptions,
      pass_id,
      duration,
      subscribed_on,
    } = req.body
    const result = await prisma.membership.create({
      data: {
        userId,
        active,
        total_redemptions,
        remaining_redemptions,
        pass_id,
        duration,
        subscribed_on,
      },
    })
    return res.json(result)
  }
}
