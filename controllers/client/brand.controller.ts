import { Request,Response } from "express"
import Category from "../../models/category.model";
import Brand from "../../models/brand.model";
import Product from "../../models/products.model";
import { BrandResponse } from "../../dto/ResponseDto/BrandResponse.dto";
import { convertBrandResponse } from "../../helper/BrandConverter";
import { ResponseData } from "../../dto/ResponseDto/ResponseData.dto";
import { ResponseError } from "../../dto/ResponseDto/ResponseError.dto";
export const getBrandsBySlugCategory=async(req:Request,res:Response)=>{
  try{
    const slugCategory=req.query.category;
    console.log(slugCategory);
    if(slugCategory==null){
      const brands = await Brand.find({deleted:0});
      const brandResponse =await Promise.all(brands.map(b=>convertBrandResponse(b)));
      res.status(200).json(new ResponseData(200,"success",brandResponse));
    }
    const categoryData = await Category.findOne({slug:slugCategory,deleted:0});
    console.log(categoryData)
    if(categoryData){
      const brands = await Brand.find({category_id:categoryData.id,deleted:0});
      console.log(brands);
      const brandResponse = await Promise.all(brands.map(b=>convertBrandResponse(b)));
      res.status(200).json(new ResponseData(200,"success",brandResponse));
    }
  }catch(err){
    console.error(err.message);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
  }
}
export const getBrandById = async (req:Request,res:Response)=>{
  try{
    const brandId=req.params.id;
    const brand = await Brand.findOne({_id:brandId,deleted:0});
    if(brand){
      const brandResponse = await convertBrandResponse(brand);
      res.status(200).json(new ResponseData(200,"success",brandResponse));
    }
    else{
      res.status(404).json(new ResponseError(404,"Brand not found"));
    }
  }catch(err){
    console.error(err.message);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
  }
}