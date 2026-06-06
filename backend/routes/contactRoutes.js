import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

const recipientEmail = "srissa2006@gmail.com"

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
      return res.status(500).json({ success: false, error: "SMTP not configured" })
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully')

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    })

  } catch (error) {
    console.error("Contact error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
