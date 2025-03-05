import { BrandResponse } from "../dto/ResponseDto/BrandResponse.dto";
import Product from "../models/products.model";

export const convertBrandResponse =async (brand: any) => {
  const products = await Product.find({brand_id:brand.id});
  brand["products"]=products;
  return new BrandResponse(brand);
}