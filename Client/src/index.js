import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/actions/UserContext";
import { CompanyProvider } from "./context/actions/CompanyContext";
import { ProfileProvider } from "./context/actions/ProfileContext";
import { ApplyProvider } from "./context/actions/ApplyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplyProvider>
      <ProfileProvider>
        <CompanyProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CompanyProvider>
      </ProfileProvider>
    </ApplyProvider>
  </React.StrictMode>
);
