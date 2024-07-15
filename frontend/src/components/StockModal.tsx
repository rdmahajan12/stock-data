import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentStock } from "../store/slices/stockSlice";

const StockModal: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const dispatch = useDispatch();

  const handleChangeStock = () => {
    dispatch(setCurrentStock(stockSymbol.toUpperCase()));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <input
        type="text"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        placeholder="Enter stock symbol"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleChangeStock}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Change Stock
      </button>
    </div>
  );
};

export default StockModal;
