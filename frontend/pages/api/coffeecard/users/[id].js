import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  if (req.method == 'PUT') {
    // update a todo.
    const { id } = req.query
    const post = await prisma.user.update({
      where: { id: Number(id) },
      data: { completed: true },
    })
    return res.json(post)
  } else if (req.method == 'DELETE') {
    // delete a todo.
    const { id } = req.query
    const post = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })
    return res.json(post)
  }
}
