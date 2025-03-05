"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}
exports.ResponseError = ResponseError;
