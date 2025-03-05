"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductResponse_dto_1 = require("./ProductResponse.dto");
class CategoryResponse {
    constructor(category) {
        this.id = category._id;
        this.name = category.name;
        this.slug = category.slug;
        this.products = (category.products || []).map((p) => new ProductResponse_dto_1.ProductResponse(p));
        this.countBrands = category.countBrands;
    }
}
