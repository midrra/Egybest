import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextManage } from "./ContextData/ContextData";
import MoveId from "./ContextData/MoveName";
import { Provider } from "react-redux";
import { store } from "./ContextData/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ContextManage>
      <MoveId>
        <App />
      </MoveId>
    </ContextManage>
  </Provider>
);
