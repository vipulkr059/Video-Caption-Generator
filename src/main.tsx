import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UrlProvider } from "./context/UrlContext";
import HomePage from "./pages/HomePage";
import { CaptionProvider } from "./context/CaptionContext";
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CaptionProvider>
        <UrlProvider>
          <HomePage />
        </UrlProvider>
      </CaptionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
