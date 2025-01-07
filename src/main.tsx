// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./assets/components/pages/Quotes.tsx";
import Gallery from "./assets/components/pages/Gallery.tsx";

createRoot(document.getElementById("main-content")!).render(
  // <StrictMode> // Commented Because It makes axios fetch twice
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
