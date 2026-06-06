import express from "express"
import nodemailer from "nodemailer"
import axios from "axios"
import Contact from "../models/Contact.js"

const router = express.Router()

const recipientEmail = "srissa2006@gmail.com"
const whatsappNumber = "7305587479"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const hasSmtpConfig = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)

router.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email and message are required" })
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipientEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New message from portfolio contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }

    if (!hasSmtpConfig) {
      console.error("SMTP configuration missing. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env to enable email delivery.")
      return res.status(500).json({ success: false, error: "SMTP not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in your environment." })
    }

    let emailSent = false
    let whatsappSent = false

    // Send Email
    try {
      if (hasSmtpConfig) {
        console.log('SMTP host=%s port=%s secure=%s', process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE)
        await transporter.sendMail(mailOptions)
        emailSent = true
        console.log('✅ Email sent successfully')
      } else {
        console.warn('⚠️ SMTP not configured, skipping email')
      }
    } catch (emailErr) {
      console.error('❌ Email send failed:', emailErr.message)
    }

    // Send WhatsApp
    try {
      const whatsappMessage = `New message from portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      
      // Using Ultramsg API (free tier available)
      if (process.env.ULTRAMSG_TOKEN && process.env.ULTRAMSG_INSTANCE) {
        await axios.post(
          `https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE}/messages/chat`,
          {
            token: process.env.ULTRAMSG_TOKEN,
            to: `${whatsappNumber}@c.us`,
            body: whatsappMessage,
          }
        )
        whatsappSent = true
        console.log('✅ WhatsApp message sent successfully')
      } else {
        console.warn('⚠️ WhatsApp API not configured. Set ULTRAMSG_TOKEN and ULTRAMSG_INSTANCE in .env')
      }
    } catch (whatsappErr) {
      console.error('❌ WhatsApp send failed:', whatsappErr.message)
    }

    const newContact = new Contact({
      name,
      email,
      message,
    })

    await newContact.save()

    res.status(201).json({
      success: true,
      message: `Message sent via ${emailSent ? 'Email' : ''} ${whatsappSent ? (emailSent ? 'and WhatsApp' : 'WhatsApp') : ''}`,
      emailSent,
      whatsappSent,
    })

  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
