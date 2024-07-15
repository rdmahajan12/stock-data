"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store/store"));
const StockModal_1 = __importDefault(require("./components/StockModal"));
const StockTable_1 = __importDefault(require("./components/StockTable"));
const App = () => {
    return (<react_redux_1.Provider store={store_1.default}>
      <div>
        <StockTable_1.default />
        <StockModal_1.default />
      </div>
    </react_redux_1.Provider>);
};
exports.default = App;
