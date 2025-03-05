import mongoose from "mongoose";
const brandSchema = new mongoose.Schema(
  {
    name: String,
    category_id:String,
    deleted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Brand = mongoose.model("Brand", brandSchema, "brands");
export default Brand;