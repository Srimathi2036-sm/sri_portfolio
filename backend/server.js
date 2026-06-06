import "dotenv/config"
import express from "express"
import cors from "cors"
import contactRoutes from "./routes/contactRoutes.js"

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true
}))

// Routes
app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {
  res.send("API is running")
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`EMAIL_USER: ${process.env.EMAIL_USER || "NOT SET"}`)
})

