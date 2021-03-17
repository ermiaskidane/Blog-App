import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import articleRoutes from "./routes/articleRoutes.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api is running")
})

app.use("/api/articles", articleRoutes)

// // Custom Error Handler for Routes does not exist
// app.use(notFound);

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

// // Custom Error handler
// app.use(errorHandler);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
})

const PORT = process.env.PORT || 5002
app.listen(PORT, console.log(`Server running in ${PORT}`))