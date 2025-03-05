"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_route_1 = __importDefault(require("./products.route"));
const apiRoutes = (app) => {
    const version = "/api";
    app.use(version + "/products", products_route_1.default);
};
exports.default = apiRoutes;
