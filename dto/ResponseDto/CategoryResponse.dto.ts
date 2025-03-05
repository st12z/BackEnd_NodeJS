import { ProductResponse } from "./ProductResponse.dto";

export class CategoryResponse {
  id: string;
  name: string;
  slug: string;
  products: ProductResponse[];
  countBrands: number;

  constructor(category:any) {
      this.id = category._id;
      this.name = category.name;
      this.slug = category.slug;
      this.products = (category.products || []).map((p: any) => new ProductResponse(p));
      this.countBrands = category.countBrands;
  }
}