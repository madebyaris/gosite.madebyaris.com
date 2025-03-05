'use server'

import { z } from 'zod'

// Define the schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Validate form data
    const result = contactFormSchema.safeParse({
      name,
      email,
      message,
    })

    if (!result.success) {
      // Return the first error message
      const errorMessage = result.error.issues[0].message
      return { error: errorMessage }
    }

    const validatedData = result.data

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, etc.
    console.log('Contact form submission:', validatedData)

    // For demonstration purposes, we'll simulate a successful email send
    // In production, replace this with actual email sending logic
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success
    return { success: true }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return { error: 'Failed to send message. Please try again later.' }
  }
} 