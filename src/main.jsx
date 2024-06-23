import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { generateThemeOptions } from "./Theme";
const theme = createTheme(
  generateThemeOptions({
    mode: "light",
  })
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
