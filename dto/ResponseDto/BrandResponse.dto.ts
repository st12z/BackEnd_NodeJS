import { ProductResponse } from "./ProductResponse.dto";

export class BrandResponse {
  id: string;
  name: string;
  productResponseList: ProductResponse[];
  orderStatus: string;

  constructor(brand:any) {
      this.id = brand._id;
      this.name = brand.name;
      this.productResponseList = (brand.products || []).map((p: any) => new ProductResponse(p));
      this.orderStatus = brand.orderStatus;
  }
}