import express from "express";

let router = express.Router()

router.post('/register', registerController)

export default router