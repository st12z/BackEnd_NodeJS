import { Request, Response } from "express";
import { ResponseData } from "../../dto/ResponseDto/ResponseData.dto";
import Product from "../../models/products.model";
import Category from "../../models/category.model";
import Brand from "../../models/brand.model";
import { ProductResponse } from "../../dto/ResponseDto/ProductResponse.dto";
import { PageResponse } from "../../dto/ResponseDto/PageResponse.dto";
import { ResponseError } from "../../dto/ResponseDto/ResponseError.dto";
export const getAllProducts =async (req:Request,res:Response) => {
  try{
    const {category,filters,sorts}=req.query;
    const pageNo: number = parseInt(req.query.pageNo as string) || 1;
    let query={};
    // Lọc theo slug category
    if(category){
      const categoryData = await Category.findOne({slug:category,deleted:0});
      if(categoryData){
        query["category_id"]=String(categoryData.id);
      }
    }
    
      // filter
    if (typeof filters === 'string') {
      const filtersArr = filters.split(',');
      for(const f of filtersArr){
          const [key, value] = f.split(':');
          if (key === 'brand') {
              const brandData = await Brand.findOne({name:value,deleted:0});
              query["brand_id"]=brandData.id;
          }
          else if(key==='price'){
            if(value.startsWith('>')){
              query[key]={$gt:parseFloat(value.substring(1))*1e6};
            }
            else if(value.startsWith('<')){
              query[key]={$lt:parseFloat(value.substring(1))*1e6};
            }
            else{
              const valueRange=value.split('-').map(v=>parseFloat(v));
              query[key]={$gte:valueRange[0]*1e6,$lte:valueRange[1]*1e6};
            }
          }
          else{
            const valueRange=value.split('-').map(v=>parseFloat(v));
            query[key] = { $gte:valueRange[0], $lte:valueRange[1] };
          }
        
      };
    }
    // sorts
    let sortQuery={};
    if (typeof sorts === 'string') {
      const sortsArr = sorts.split(',');
      for(const s of sortsArr){
          const [key, value] = s.split(':');
          if (value === 'asc') {
            sortQuery[key] = 1;
          } else {
            sortQuery[key] = -1;
          }
      };
    }
    console.log(query);
    const total = await Product.countDocuments(query);
    const data = await Product.find(query)
                              .sort(sortQuery)
                              .skip((pageNo-1)*6)
                              .limit(6);
    const productResponses = data.map(product=>new ProductResponse(product))
    const pageResponse = new PageResponse(pageNo,6,total,productResponses);
    const responseData = new ResponseData(200,"Success",pageResponse);
    res.status(200).json(responseData);
  }catch(err){
    console.log(err);
    res.status(500).json(new ResponseError(500,"Internal Server Error"));
  }
}
