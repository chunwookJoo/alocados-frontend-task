import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ROUTES } from "./utils/constants/routes";
import ExchangeHistoryPage from "./pages/ExchangeHistoryPage";
import ExchangePage from "./pages/ExchangePage";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          cobalt: "#5d28f2",
          gray: "#8d8d8d",
          lightPurple: "#ece5fd",
          grayLight: "#f1f7fd",
        },
      }}
    >
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
    </ThemeProvider>
  );
}

export default App;
