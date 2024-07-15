"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const stockSlice_1 = require("../store/slices/stockSlice");
const StockModal = () => {
    const [stockSymbol, setStockSymbol] = (0, react_1.useState)("");
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleChangeStock = () => {
        dispatch((0, stockSlice_1.setCurrentStock)(stockSymbol.toUpperCase()));
    };
    return (<div className="flex flex-col items-center justify-center space-y-4 p-4">
      <input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} placeholder="Enter stock symbol" className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button onClick={handleChangeStock} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Change Stock
      </button>
    </div>);
};
exports.default = StockModal;
