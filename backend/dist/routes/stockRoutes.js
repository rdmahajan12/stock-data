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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stock_1 = require("../models/stock");
const router = (0, express_1.Router)();
router.get("/stocks/:symbol", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { symbol } = req.params;
    const stocks = yield stock_1.Stock.find({ symbol })
        .sort({ timestamp: -1 })
        .limit(100);
    res.json(stocks);
}));
exports.default = router;
