"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = void 0;
class PageResponse {
    constructor(pageNo, pageSize, total, dataRes) {
        this.pageNo = pageNo;
        this.pageSize = pageSize;
        this.total = total;
        this.dataRes = dataRes;
    }
}
exports.PageResponse = PageResponse;
