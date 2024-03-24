import { Provider } from "react-redux";
import App from "./App.jsx";
import "./output.css";
import { store } from "./app/store.ts";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
