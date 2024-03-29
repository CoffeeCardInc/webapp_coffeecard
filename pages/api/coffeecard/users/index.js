import prisma from '../../../../lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'
const bcrypt = require('bcrypt')

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
  } else if (req.method === 'POST') {
    const { email, password } = req.body

    try {
      const hash = await bcrypt.hash(password, 0)
      await prisma.User.create({
        data: {
          email: email,
          password: hash,
        },
      })

      return res.status(200).end()
    } catch (err) {
      return res.status(503).json({ err: err.toString() })
    }
  } else {
    return res
      .status(405)
      .json({ error: 'This request only supports POST requests' })
  }
}
