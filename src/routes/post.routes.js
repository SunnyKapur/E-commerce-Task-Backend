import express from "express";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

let router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  try {
    return res.status(200).json({
      message: "Authorized user",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

export default router;