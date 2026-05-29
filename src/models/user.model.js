import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true
    },
    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
      required: [true, "mobile is required"],
    },
  },
  {
    timestamps: true,
  },
);

let UserModel = mongoose.model("user", userSchema);
export default UserModel;
