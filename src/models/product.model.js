import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    trim: true,
  },
  images: [String],
});

let ProductModel = mongoose.model("product", productSchema);

export default ProductModel;
