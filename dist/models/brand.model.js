"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const brandSchema = new mongoose_1.default.Schema({
    name: String,
    category_id: String,
    deleted: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
const Brand = mongoose_1.default.model("Brand", brandSchema, "brands");
exports.default = Brand;
