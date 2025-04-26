import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer/>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
