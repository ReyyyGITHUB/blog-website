import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnlyDev from "./pages/dev/OnlyDev";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import ViewDetail from "./pages/ViewDetail";
import Tentang from "./pages/Tentang";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/view-detail" element={<ViewDetail />} />
        <Route path="/contact" element={<ViewDetail />} />
        <Route path="/login" element={<ViewDetail />} />
        <Route path="/admin" element={<ViewDetail />} />

        <Route path="/dev" element={<OnlyDev />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
