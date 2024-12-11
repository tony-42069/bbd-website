import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { to, replyTo, subject, formData } = await request.json()

    const emailContent = `
      New Contact Form Submission

      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}

      Message:
      --------
      ${formData.message}
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@bakedbydonika.com',
      to,
      replyTo,
      subject,
      text: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
