"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const mongoose_1 = require("mongoose");
const stockSchema = new mongoose_1.Schema({
    symbol: { type: String, required: true },
    price: { type: Number, require: true },
    timestamp: { type: Date, default: Date.now },
});
exports.Stock = (0, mongoose_1.model)("Stock", stockSchema);
