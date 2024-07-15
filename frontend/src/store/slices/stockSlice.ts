import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface StockState {
  data: { [symbol: string]: any[] };
  currentStock: string;
}

const initialState: StockState = {
  data: {},
  currentStock: "AAPL",
};

export const fetchStockData = createAsyncThunk(
  "stocks/fetchStockData",
  async (symbol: string) => {
    const response = await axios.get(
      `http://localhost:5000/api/stocks/${symbol}`
    );
    return { symbol, data: response.data };
  }
);

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    setCurrentStock(state, action) {
      state.currentStock = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStockData.fulfilled, (state, action) => {
      state.data[action.payload.symbol] = action.payload.data;
    });
  },
});

export const { setCurrentStock } = stockSlice.actions;

export default stockSlice.reducer;
