import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUserForm from "./components/CreateUserForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./components/Home.jsx";

//implement three routes
// 1.) base route ("/") for LoginForm
// 2.) "/register" for CreateUserForm
// 3.) "/home" from Home

const routes = [];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
