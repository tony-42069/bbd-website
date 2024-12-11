type OrderDetails = {
  customerName: string
  email: string
  phone: string
  deliveryAddress: string
  deliveryDate: string
  deliveryTime: string
  items: Array<{
    name: string
    quantity: number
    specialInstructions: string
  }>
  specialRequests: string
}

export const sendOrderConfirmation = async (orderDetails: OrderDetails) => {
  try {
    const response = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: orderDetails.email,
        bcc: 'info@bakedbydonika.com',
        subject: `Order Confirmation - ${orderDetails.customerName}`,
        orderDetails,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return true
  } catch (error) {
    console.error('Error sending order confirmation:', error)
    return false
  }
}

export const sendContactFormEmail = async (formData: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  try {
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@bakedbydonika.com',
        replyTo: formData.email,
        subject: `Contact Form Submission - ${formData.name}`,
        formData,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return true
  } catch (error) {
    console.error('Error sending contact form:', error)
    return false
  }
}
