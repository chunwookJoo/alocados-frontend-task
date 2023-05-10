import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExchangePage from "./pages/ExchangePage";
import ExchangeHistoryPage from "./pages/ExchangeHistoryPage";
import { ROUTES } from "./utils/constants/routes";
import Navbar from "./components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.EXCHANGE_PAGE} element={<ExchangePage />} />
        <Route
          path={ROUTES.EXCHANGE_HISTORY_PAGE}
          element={<ExchangeHistoryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
