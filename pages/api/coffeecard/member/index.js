import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const allMember = await prisma.member.findMany()
  res.status(200).json(allMember)
}
