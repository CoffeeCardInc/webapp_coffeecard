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
  if (req.method == 'GET') {
    const allUsers = await prisma.User.findUnique({
      where: { email: session.user.email },
    })
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const { email, password, is_shop, customer, full_name, date_of_birth } =
      req.body
    const result = await prisma.user.create({
      data: {
        email,
        password,
        // customer: {
        //   create: {
        //     email,
        //     passowrd: password,
        //     full_name: '',
        //     date_of_birth: '',
        //   },
        // },
      },
    })
    return res.json(result)
  }
}
