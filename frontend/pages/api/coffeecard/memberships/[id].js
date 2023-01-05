import prisma from '../../../../lib/prisma'

export default async function handle(req, res) {
  if (req.method == 'PUT') {
    // update a change membership.
    const { id } = req.query
    const post = await prisma.membership.update({
      where: { id: Number(id) },
    })
    return res.json(post)
  } else if (req.method == 'DELETE') {
    // delete a membership.
    const { id } = req.query
    const post = await prisma.membership.delete({
      where: {
        id: Number(id),
      },
    })
    return res.json(post)
  }
}
