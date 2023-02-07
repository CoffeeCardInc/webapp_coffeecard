import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const allUsers = await prisma.customer.findMany({
      include: { user: true },
    })
    res.status(200).json(allUsers)
  } else if (req.method == 'POST') {
    const {
      full_name,
      email,
      is_shop,
      passowrd,
      date_of_birth,
      language,
      city,
      membership_status,
      user_id,
    } = req.body
    const result = await prisma.customer.create({
      data: {
        full_name,
        email,
        is_shop,
        passowrd,
        date_of_birth,
        language,
        city,
        membership_status,
        user_id,
      },
    })
    return res.json(result)
  }
}
