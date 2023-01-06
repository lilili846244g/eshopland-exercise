import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Women from "./components/Women";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/women" element={<Women />} />
    </Routes>
  </Router>
);
