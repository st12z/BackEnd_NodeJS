"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponse = void 0;
class ProductResponse {
    constructor(product) {
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
exports.ProductResponse = ProductResponse;
