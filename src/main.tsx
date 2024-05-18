import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UrlProvider } from "./context/UrlContext";
import HomePage from "./pages/HomePage";
import { CaptionProvider } from "./context/CaptionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CaptionProvider>
      <UrlProvider>
        <HomePage />
      </UrlProvider>
    </CaptionProvider>
  </React.StrictMode>
);
