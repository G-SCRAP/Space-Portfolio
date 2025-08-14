import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Pages/App.jsx";
import ThreeJSLink from "./Pages/ThreeJSLink.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/threejs" element={<ThreeJSLink />} />
    </Routes>
  </BrowserRouter>
);
