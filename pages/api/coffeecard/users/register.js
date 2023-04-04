import prisma from '../../../../lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'
const bcrypt = require('bcrypt')

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
