import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export let registerController = async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!email || !mobile || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let isExisted = await UserModel.findOne({ email });

    if (isExisted)
      return res.status(409).json({
        message: "This email is already registered",
      });

    let hasPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      name,
      email,
      password: hasPass,
      mobile,
    });

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("id_card", token, {
      httpOnly: true,
    });

    let user = newUser.toObject();
    delete user.password;

    return res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
