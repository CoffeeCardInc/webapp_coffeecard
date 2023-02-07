import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allPass = await prisma.pass.findMany({ include: { shop: true } })
  res.status(200).json(allPass)
}
