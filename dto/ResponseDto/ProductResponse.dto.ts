export class ProductResponse {
  id: string;
  name: string;
  description: string;
  status: string;
  slug: string;
  price: number;
  discount: number;
  image: string;
  stock: number;
  rate: number;
  sold: number;
  categoryId: string;
  brandId: string;
  memory: string;
  frequency: string;
  pin: string;
  monitorSize: string;

  constructor(product: any) {
      this.id = product._id;
      this.name = product.name;
      this.description = product.description;
      this.status = product.status;
      this.slug = product.slug;
      this.price = product.price;
      this.discount = product.discount;
      this.image = product.image;
      this.stock = product.stock;
      this.rate = product.rate;
      this.sold = product.sold;
      this.categoryId = product.category_id;
      this.brandId = product.brand_id;
      this.memory = product.memory;
      this.frequency = product.frequency;
      this.pin = product.pin;
      this.monitorSize = product.monitorSize;
  }
}