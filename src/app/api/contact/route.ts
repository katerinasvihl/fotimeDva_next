import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // validace — můžeš upravit
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Chybí údaje.' }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: 'Web Fotografie <onboarding@resend.dev>',
      to: 'marek.chasak@seznam.cz', // sem se to bude posílat
      subject: 'Nová zpráva z kontaktního formuláře',
      html: `
        <h2>Nový kontakt z webu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zpráva:</strong><br>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Nepodařilo se odeslat e-mail.' },
      { status: 500 },
    )
  }
}
