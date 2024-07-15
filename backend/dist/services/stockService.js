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
exports.fetchStockData = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const stock_1 = require("../models/stock");
const STOCK_API_KEY = "a90eedb1b9ad41bfb800e577d4ca36df";
const API_URL = `https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=${STOCK_API_KEY}`;
const STOCKS = ["AAPL", "GOOG", "AMZN", "MSFT", "TSLA"];
const fetchStockData = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const symbol of STOCKS) {
        try {
            const response = yield axios_1.default.get(`${API_URL}/stocks/${symbol}`);
            console.log({ response });
            const data = response.data;
            const stock = new stock_1.Stock({
                symbol,
                price: 200,
            });
            yield stock.save();
        }
        catch (error) {
            console.error(`Error fetching data for ${symbol}: `, error);
        }
    }
});
exports.fetchStockData = fetchStockData;
