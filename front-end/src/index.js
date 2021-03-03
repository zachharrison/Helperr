import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Container/Container.css";
import "./components/JobList/JobList.css";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";

import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
