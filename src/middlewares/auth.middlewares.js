import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export let authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.id_card;

    if (!token)
      return res.status(401).json({
        message: "Token not found",
      });

    let decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode)
      return res.status(401).json({
        message: "unauthorized user",
      });

    let user = await UserModel.findById(decode.id);
    if (!user)
      return res.status(401).json({
        message: "unauthorized user",
      });
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error in middleware",
    });
  }
};
