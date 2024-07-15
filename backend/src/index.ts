import express from "express";
import mongoose from "mongoose";
import stockRoutes from "./routes/stockRoutes";
import { fetchStockData } from "./services/stockService";
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5000;
const MONGO_URI: string =
  "mongodb+srv://rdmahajan1297:riteshmahajan@stock-data.tb3dlvs.mongodb.net/stockdata?retryWrites=true&w=majority&appName=stock-data";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use("/api", stockRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

setInterval(fetchStockData, 5000);
