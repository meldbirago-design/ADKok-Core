import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blueprints from "../pages/public/Blueprints";
import Quote from "../pages/public/Quote";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/blueprints"
          element={<Blueprints />}
        />

        <Route
          path="/quote"
          element={<Quote />}
        />

      </Routes>
    </BrowserRouter>
  );
}
