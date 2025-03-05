"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductResponse_dto_1 = require("./ProductResponse.dto");
class BrandResponse {
    constructor(brand) {
        this.id = brand._id;
        this.name = brand.name;
        this.productResponseList = (brand.products || []).map((p) => new ProductResponse_dto_1.ProductResponse(p));
        this.orderStatus = brand.orderStatus;
    }
}
