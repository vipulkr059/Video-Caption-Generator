import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UrlProvider } from "./context/UrlContext";
import HomePage from "./pages/HomePage";
import { CaptionProvider } from "./context/CaptionContext";
import { ThemeProvider } from "./context/ThemeProvider";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <CaptionProvider>
          <UrlProvider>
            <HomePage />
          </UrlProvider>
        </CaptionProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
