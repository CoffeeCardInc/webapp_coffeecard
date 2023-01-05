import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allMemberships = await prisma.memberships.findMany()
  res.status(200).json(allMemberships)
}
