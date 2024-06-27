/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

import "./index.css";
import App from "./App";
import { store } from "./store";
import { generateThemeOptions } from "./Theme";

const theme = createTheme(
  generateThemeOptions({
    mode: "light",
  }),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
