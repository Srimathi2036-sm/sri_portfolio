import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    // Send email via Formspree
    const formspreeResponse = await fetch("https://formspree.io/f/mlgkgwzn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error("Failed to send message")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll contact you soon.",
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Contact API error:", error.message)
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
