import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h2>This is Home</h2>,
      },
      {
        path: "/language-kids",
        element: <h2>This is Languages for kids</h2>,
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
