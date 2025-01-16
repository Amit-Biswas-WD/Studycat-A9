import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "./../page/Home/Home";
import LanguageKids from "../components/LanguageKids/LanguageKids";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/language-kids",
        element: <LanguageKids/>
      },
      {
        path: "/about-us",
        element: <h2>This is About us</h2>,
      },
      {
        path: "/learning-resources",
        element: <h2>This is Learning resources</h2>,
      },
    ],
  },
]);
