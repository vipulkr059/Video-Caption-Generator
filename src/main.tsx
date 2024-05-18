import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UrlProvider } from "./context/UrlContext";
import UrlInput from "./components/UrlInput";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UrlProvider>
      <HomePage />
    </UrlProvider>
  </React.StrictMode>
);
