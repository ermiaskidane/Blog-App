import express from "express"
import dotenv from "dotenv"
import path from "path"
import colors from "colors"

import userRoutes from "./routes/userRoutes.js"
import articleRoutes from "./routes/articleRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import connectDB from "./config/db.js"

dotenv.config()
 
connectDB()

const app = express()

app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Api is running")
// }) 

app.use("/api/users", userRoutes)
app.use("/api/articles", articleRoutes)
app.use("/api/upload", uploadRoutes)
 
const __dirname = path.resolve() // c/z we use ES6 module we need to mimic
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/build")))

    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")))
} else {
    app.get("/", (req, res) => {
        res.send("API is running...")
    })
}

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
