import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./page/MainPage";
import WorkerAdd from "./component/WorkerAdd";
import reportWebVitals from "./reportWebVitals";
import AccountSettings from "./component/AccountSettings";
import WorkerDetail from "./component/WorkerDetail";
import HumanTable from "./component/HumanTable";
import CommissionAdd from "./component/CommissionAdd";
import LoginPage from "./page/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
      {/* <WorkerAdd /> */}
      {/* <AccountSettings /> */}
      {/* <WorkerDetail/> */}
      {/* <HumanTable/> */}
      {/* <CommissionAdd/> */}
      {/* <LoginPage /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
