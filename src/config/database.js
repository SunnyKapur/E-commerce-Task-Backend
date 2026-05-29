import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected mongodb");
  } catch (error) {
    console.log("error in mongodb connection", error);
  }
};

export default connectDB;
