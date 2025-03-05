import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: String,
    slug: { 
      type: String, 
      slug: "title",
      unique:true,
    },
    deleted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", categorySchema, "categories");
export default Category;