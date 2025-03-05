import { Request,Response } from "express"
import Product from "../../models/products.model";
import { ResponseError } from "../../dto/ResponseDto/ResponseError.dto";
import { ProductResponse } from "../../dto/ResponseDto/ProductResponse.dto";
import { ResponseData } from "../../dto/ResponseDto/ResponseData.dto";
export const getAllProductsBySearch=async(req:Request,res:Response)=>{
  try{
    const search=req.query.search ? req.query.search.toString().replace(/\s/g,"") : "";
    const category = await Product.find({name:{$regex:search,$options:"i"}});
    const brand = await Product.find({name:{$regex:search,$options:"i"}});
    const query: any ={
      $or:[
        { name: { $regex: search, $options: "i" } },
      ]
    }
    if(category && category.length > 0){
      query["$or"].push(
        { category_id: { $in: category.map(c => c.id) } }
      );
    }
    if(brand && brand.length > 0){
      query["$or"].push(
        { brand_id: { $in: brand.map(b => b.id) } }
      );
    }
    console.log(query);
    const products= await Product.find(query);
    const productResponses = products.map((product) => new ProductResponse(product));
    res.status(200).json(new ResponseData(200,"success",productResponses));
  }catch(err){
    console.error(err.message);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
    
  }
}