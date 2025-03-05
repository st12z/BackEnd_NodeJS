import { Request,Response } from "express"
import Category from "../../models/category.model";
import Brand from "../../models/brand.model";
import Product from "../../models/products.model";
import { BrandResponse } from "../../dto/ResponseDto/BrandResponse.dto";
import { convertBrandResponse } from "../../helper/BrandConverter";
import { ResponseData } from "../../dto/ResponseDto/ResponseData.dto";
import { ResponseError } from "../../dto/ResponseDto/ResponseError.dto";
import { convertCategoryResponse } from "../../helper/CategoryConverter";
export const getAllCategories=async(req:Request,res:Response)=>{
  try{
    const categories= await Category.find({deleted:0});
    const categoryResponses = await Promise.all(categories.map((category) => convertCategoryResponse(category)));
    res.status(200).json(new ResponseData(200,"success",categoryResponses));
  }catch(err){
    console.error(err.message);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
  }
}
export const getCategoryById=async(req:Request,res:Response)=>{
  try{
    const categoryId=req.params.id;
    const category = await Category.findOne({_id:categoryId,deleted:0});
    if(category){
      res.status(200).json(new ResponseData(200,"success",await convertCategoryResponse(category)));
    }
    else{
      res.status(404).json(new ResponseError(404,"Category not found"));
    }
  }catch(err){
    console.error(err.message);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
  }
}