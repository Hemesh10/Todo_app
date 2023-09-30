import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import DataStorage from "./components/Provider/Contect.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataStorage>
      <Theme>
        <App />
        <Toaster position="top-right" />
      </Theme>
    </DataStorage>
  </React.StrictMode>
);
