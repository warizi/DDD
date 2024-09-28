/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import { MainLayout } from "./layout/ui/MainLayout";
import { DashboardPage } from "@pages/dashboard/ui/DashboardPage";
import { ROUTE_URL } from "@shared/consts/route/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTE_URL.dashboard} element={<DashboardPage />} />
          <Route path={ROUTE_URL.test} element={<div>Test</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
