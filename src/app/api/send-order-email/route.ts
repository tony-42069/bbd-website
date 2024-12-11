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
    const { to, bcc, subject, orderDetails } = await request.json()

    // Format the order items into a readable list
    const itemsList = orderDetails.items
      .map(
        (item) => `
        - ${item.name} (Quantity: ${item.quantity})
          ${item.specialInstructions ? `  Special Instructions: ${item.specialInstructions}` : ''}`
      )
      .join('\n')

    const emailContent = `
      New Order from ${orderDetails.customerName}

      Customer Details:
      ----------------
      Name: ${orderDetails.customerName}
      Email: ${orderDetails.email}
      Phone: ${orderDetails.phone}

      Delivery Details:
      ----------------
      Address: ${orderDetails.deliveryAddress}
      Date: ${orderDetails.deliveryDate}
      Time: ${orderDetails.deliveryTime}

      Order Items:
      ------------
      ${itemsList}

      ${orderDetails.specialRequests ? `\nSpecial Requests:\n${orderDetails.specialRequests}` : ''}

      Thank you for choosing Baked by Donika!
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@bakedbydonika.com',
      to,
      bcc,
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
