import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    discount: Number,
    image: String,
    price: Number,
    rate:Number,
    slug: { 
      type: String, 
      slug: "title",
      unique:true,
    },
    sold:Number,
    status:{
      type: Number,
      default: 0,
    },
    stock:Number,
    brand_id: String,
    category_id: String,
    frequency: Number,
    memory: Number,
    monitor_size:Number,
    pin : Number,
    deleted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema, "products");
export default Product;