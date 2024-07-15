import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchStockData } from "../store/slices/stockSlice";
import useInterval from "../hooks/useInterval";

const StockTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentStock = useSelector(
    (state: RootState) => state.stocks.currentStock
  );
  const stockData = useSelector(
    (state: RootState) => state.stocks.data[currentStock]
  );

  useEffect(() => {
    dispatch(fetchStockData(currentStock));
  }, [dispatch, currentStock]);

  useInterval(() => {
    dispatch(fetchStockData(currentStock));
  }, 5000);

  return (
    <div className="overflow-x-auto mx-20 my-10">
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
          {stockData?.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-20 py-5 whitespace-nowrap text-sm font-medium text-gray-500">
                {entry.symbol}
              </td>
              <td className="px-20 py-5 whitespace-nowrap text-sm text-gray-500">
                {entry.price}
              </td>
              <td className="px-20 py-5 whitespace-nowrap text-sm text-gray-500">
                {new Date(entry.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
