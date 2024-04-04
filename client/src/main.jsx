import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUserForm from "./components/CreateUserForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./components/Home.jsx";

const routes = [
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <CreateUserForm />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
