import { CategoryResponse } from "../dto/ResponseDto/CategoryResponse.dto";
import Brand from "../models/brand.model";
import Category from "../models/category.model";
import Product from "../models/products.model";

export const convertCategoryResponse =async (category: any) => {
  const countBrands = await Brand.countDocuments({category_id:category.id});
  category["countBrands"]=countBrands;
  const products = await Product.find({category_id:category.id});
  category["products"]=products;
  return new CategoryResponse(category);
}