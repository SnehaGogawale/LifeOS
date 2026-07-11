import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Toaster position="top-right" />
      <App />
    </AuthProvider>
  </BrowserRouter>
);