import { ProductResponse } from "./ProductResponse.dto";

class BrandResponse {
  id: string;
  name: string;
  productResponseList: any[];
  orderStatus: string;

  constructor(brand:any) {
      this.id = brand._id;
      this.name = brand.name;
      this.productResponseList = (brand.products || []).map((p: any) => new ProductResponse(p));
      this.orderStatus = brand.orderStatus;
  }
}