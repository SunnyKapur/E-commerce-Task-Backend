import express from "express";
import { registerController } from "../controllers/auth.controller.js";

let router = express.Router();

router.post("/register", registerController);

export default router;
