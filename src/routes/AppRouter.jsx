import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blueprints from "../pages/public/Blueprints";
import Quote from "../pages/public/Quote";
import OurProcess from "../pages/public/OurProcess";
import Testimonials from "../pages/public/Testimonials";
import ChatWithUs from "../pages/public/ChatWithUs";
import Contact from "../pages/public/Contact";
import Order from "../pages/public/Order";
import AdminLogin from "../pages/public/AdminLogin";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/blueprints" element={<Blueprints />} />

        <Route path="/quote" element={<Quote />} />

        <Route path="/process" element={<OurProcess />} />

        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/chat" element={<ChatWithUs />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/order" element={<Order />} />

        <Route path="/admin" element={<AdminLogin />} />

      </Routes>
    </BrowserRouter>
  );
}
