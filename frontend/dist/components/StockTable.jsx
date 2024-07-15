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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const stockSlice_1 = require("../store/slices/stockSlice");
const useInterval_1 = __importDefault(require("../hooks/useInterval"));
const StockTable = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const currentStock = (0, react_redux_1.useSelector)((state) => state.stocks.currentStock);
    const stockData = (0, react_redux_1.useSelector)((state) => state.stocks.data[currentStock]);
    (0, react_1.useEffect)(() => {
        dispatch((0, stockSlice_1.fetchStockData)(currentStock));
    }, [dispatch, currentStock]);
    (0, useInterval_1.default)(() => {
        dispatch((0, stockSlice_1.fetchStockData)(currentStock));
    }, 5000);
    return (<div className="overflow-x-auto mx-20 my-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-20 py-5 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-20 py-5 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Price
            </th>
            <th className="px-20 py-5 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stockData === null || stockData === void 0 ? void 0 : stockData.map((entry, index) => (<tr key={index} className="hover:bg-gray-100">
              <td className="px-20 py-5 whitespace-nowrap text-sm font-medium text-gray-500">
                {entry.symbol}
              </td>
              <td className="px-20 py-5 whitespace-nowrap text-sm text-gray-500">
                {entry.price}
              </td>
              <td className="px-20 py-5 whitespace-nowrap text-sm text-gray-500">
                {new Date(entry.timestamp).toLocaleString()}
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>);
};
exports.default = StockTable;
