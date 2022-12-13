import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import "./index.css";
import App from "./App";
import swDev from "./swDev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Router>
  </React.StrictMode>
);

swDev();
