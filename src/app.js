import express from "express";
import productRoutes from "./routes/product.route.js"
import authRoutes from './routes/auth.routes.js'

let app = express()
app.use(express.json())

app.use('/api', productRoutes)
app.use('/api/auth', authRoutes)

export default app