import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const { id } = req.query

  if (req.method == 'GET') {
    const currentPass = await prisma.pass.findUnique({
      where: { pass_id: Number(id) },
    })
    return res.json(currentPass)
  }
}
