import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment variables.")
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    conn: typeof mongoose | null
    promise?: Promise<typeof mongoose>
  }
}

let cached = globalWithMongoose.mongoose
if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: undefined }
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "portfolioDB",
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
