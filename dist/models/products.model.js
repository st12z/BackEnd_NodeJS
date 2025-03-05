"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    discount: Number,
    image: String,
    price: Number,
    rate: Number,
    slug: {
        type: String,
        slug: "title",
        unique: true,
    },
    sold: Number,
    status: {
        type: Number,
        default: 0,
    },
    stock: Number,
    brand_id: String,
    category_id: String,
    frequency: Number,
    memory: Number,
    monitor_size: Number,
    pin: Number,
    deleted: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
const Product = mongoose_1.default.model("Product", productSchema, "products");
exports.default = Product;
