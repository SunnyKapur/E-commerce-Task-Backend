import ProductModel from "../models/product.model.js";

export let createProduct = async (req, res) => {
  try {
    let { name, price, description, category } = req.body;

    if (!name || !price)
      return res.status(400).json({
        message: "name and price are required",
      });

    if (name.trim().length < 3) {
      return res.status(400).json({
        message: "name must be at least 3 character long",
      });
    }

    let newProduct = await ProductModel.create({
      name,
      price,
      description,
      category,
    });

    if (!newProduct) {
      return res.status(400).json({
        message: "Invalid product",
      });
    }

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export let getAllProducts = async (req, res) => {
  try {
    let { category } = req.query;

    let allProducts;

    if (category) {
      allProducts = await ProductModel.find({ category });
    } else {
      allProducts = await ProductModel.find();
    }

    return res.status(200).json({
      message: "Products fetched successfully",
      products: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export let getProductById = async (req, res) => {
  try {
    let { id } = req.params;

    let product = await ProductModel.findById(id);

    if (!product)
      return res.status(404).json({
        message: "product not found",
      });

    return res.status(200).json({
      message: "Product fetched successfully",
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export let updateProduct = async (req, res) => {
  try {
    let { id } = req.params;

    let product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let { name, price, description, category } = req.body;

    let updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      { new: true },
    );

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export let deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct)
      return res.status(404).json({
        message: "Product not found",
      });

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
