import prisma from '../../../../lib/prisma'

export default async function handle(req, res) {
  if (req.method == 'PUT') {
    // update a user.
    const { id } = req.query
    const { email, password, is_shop } = req.body
    const post = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, is_shop },
    })
    return res.json(post)
  } else if (req.method == 'DELETE') {
    // delete a user.
    const { id } = req.query
    const post = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })
    return res.json(post)
  }
}
