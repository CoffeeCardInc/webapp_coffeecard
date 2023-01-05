import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  if (req.method == 'PUT') {
    // update a change customer.
    const { id } = req.query
    const post = await prisma.customer.update({
      where: { id: Number(id) },
    })
    return res.json(post)
  } else if (req.method == 'DELETE') {
    // delete a customer.
    const { id } = req.query
    const post = await prisma.customer.delete({
      where: {
        id: Number(id),
      },
    })
    return res.json(post)
  }
}
