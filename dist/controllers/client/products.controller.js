"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const ResponseData_dto_1 = require("../../dto/ResponseDto/ResponseData.dto");
const products_model_1 = __importDefault(require("../../models/products.model"));
const category_model_1 = __importDefault(require("../../models/category.model"));
const brand_model_1 = __importDefault(require("../../models/brand.model"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, filter, sort, pageNo = 1 } = req.query;
    let query = {};
    if (category) {
        const categoryData = yield category_model_1.default.findOne({ slug: category, deleted: 0 });
        if (categoryData) {
            query["category_id"] = categoryData._id;
        }
    }
    if (typeof filter === 'string') {
        const filters = filter.split(',');
        console.log(filters);
        filters.forEach((f) => __awaiter(void 0, void 0, void 0, function* () {
            const [key, value] = f.split(':');
            if (key === 'brand') {
                const brandData = yield brand_model_1.default.findOne({ name: value, deleted: 0 });
                query["brand_id"] = brandData._id;
            }
            if (key === 'price') {
                if (value.startsWith('>')) {
                    query[key] = { $gt: parseFloat(value.substring(1)) * 1e6 };
                }
                else if (value.startsWith('<')) {
                    query[key] = { $lt: parseFloat(value.substring(1)) * 1e6 };
                }
                else {
                    const valueRange = value.split('-').map(v => parseFloat(v));
                    query[key] = { $gte: valueRange[0] * 1e6, $lte: valueRange[1] * 1e6 };
                }
            }
            else {
                const valueRange = value.split('-').map(v => parseFloat(v));
                query[key] = { $gte: valueRange[0], $lte: valueRange[1] };
            }
        }));
    }
    console.log(query);
    const data = yield products_model_1.default.find(query);
    const responseData = new ResponseData_dto_1.ResponseData(200, "Success", data);
    res.status(200).json(responseData);
});
exports.getAllProducts = getAllProducts;
