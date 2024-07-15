import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { Stock } from "../models/stock";

const STOCK_API_KEY = "452RWJH1A4SZPUXH";
const API_URL = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=${STOCK_API_KEY}`;
const STOCKS = ["AAPL", "GOOG", "AMZN", "MSFT", "TSLA"];

export const fetchStockData = async () => {
  for (const symbol of STOCKS) {
    try {
      const response = await axios.get(`${API_URL}/stocks/${symbol}`);
      const data = response.data;

      const stock = new Stock({
        symbol,
        price: data.price ? data.price : 0,
      });

      await stock.save();
    } catch (error) {
      console.error(`Error fetching data for ${symbol}: `, error);
    }
  }
};
