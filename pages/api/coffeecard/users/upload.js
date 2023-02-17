import formidable from 'formidable'
import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err)
      res.status(500).json({ error: 'Error uploading file' })
      return
    }

    const { name } = fields

    const result = await prisma.file.create({
      data: {
        name,
        path: files.file.path,
      },
    })

    res.status(200).json(result)
  })
}
