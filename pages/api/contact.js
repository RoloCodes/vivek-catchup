import axios from 'axios'

export default async function handler(req, res) {
  const name = req.body.name
  const email = req.body.email

  const data = JSON.stringify({
    fields: {
      Name: name,
      Email: email,
    },
  })

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }

  const airTableRes = await axios.post(
    'https://api.airtable.com/v0/appsw9bJnwGbphrYf/emails',
    data,
    config
  )

  res.status(200).json({ status: 'success' })
}
