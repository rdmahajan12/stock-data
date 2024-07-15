"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const stockRoutes_1 = __importDefault(require("./routes/stockRoutes"));
const stockService_1 = require("./services/stockService");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
const PORT = 5000;
const MONGO_URI = "mongodb+srv://rdmahajan1297:riteshmahajan@stock-data.tb3dlvs.mongodb.net/stockdata?retryWrites=true&w=majority&appName=stock-data";
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
app.use("/api", stockRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
setInterval(stockService_1.fetchStockData, 5000);
