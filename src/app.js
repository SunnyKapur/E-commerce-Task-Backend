import express from "express";
import productRoutes from "./routes/product.route.js"


let app = express()
app.use(express.json())

app.use('/api', productRoutes)

export default app