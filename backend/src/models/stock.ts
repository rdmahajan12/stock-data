import { Schema, model } from "mongoose";

const stockSchema = new Schema({
  symbol: { type: String, required: true },
  price: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

export const Stock = model("Stock", stockSchema);
