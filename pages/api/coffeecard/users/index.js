import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const allUsers = await prisma.User.findMany({
      include: { customer: true, membership: true },
    })
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const { email, password, is_shop, customer, full_name, date_of_birth } =
      req.body
    const result = await prisma.user.create({
      data: {
        email,
        password,
        customer: {
          create: {
            email,
            passowrd: password,
            full_name: '',
            date_of_birth: '',
          },
        },
      },
    })
    return res.json(result)
  }
}
