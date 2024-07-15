import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import StockModal from "./components/StockModal";
import StockTable from "./components/StockTable";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <StockTable />
        <StockModal />
      </div>
    </Provider>
  );
};

export default App;
