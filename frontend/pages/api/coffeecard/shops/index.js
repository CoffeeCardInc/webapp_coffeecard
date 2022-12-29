import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allShops = await prisma.shop.findMany()
  res.status(200).json(allShops)
}
