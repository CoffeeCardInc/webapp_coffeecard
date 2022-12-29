import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allShops = await prisma.member.findMany()
  res.status(200).json(allShops)
}
