import { ProductResponse } from "../dto/ResponseDto/ProductResponse.dto"

export const convertToProductResponse = (product: any) => {
  return new ProductResponse(product);
}