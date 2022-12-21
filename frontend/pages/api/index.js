// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from '../../db.js'

export default async (req, res) => {
  try {
    console.log('req nom', req.body)
    const query = 'INSERT INTO posts(content) VALUES($1)'
    const values = [req.body.content]
    const result = await conn.query(query, values)
    console.log('ttt', result)
  } catch (error) {
    console.log(error)
  }
}

/*SELECT * FROM information_schema.tables
WHERE table_schema = 'public'
*/
