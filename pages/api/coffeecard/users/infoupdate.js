import prisma from '../../../../lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    // Not Signed in
    res.status(401).json({ message: 'You must be loggen in' })
    return
  }
  if (req.method == 'PUT') {
    // update a user info.
    const { email, image, name, mobile } = req.body
    const userInfo = await prisma.User.update({
      where: { email: session.user.email },
      data: { email, image, name, mobile },
    })
    return res.json(userInfo)
  } else if (req.method == 'DELETE') {
    // delete a user.

    const post = await prisma.User.delete({
      where: {
        email: session.user.email,
      },
    })
    return res.json(post)
  }
}
