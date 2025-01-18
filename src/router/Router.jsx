import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "./../page/Home/Home";
import LanguageKids from "../components/LanguageKids/LanguageKids";
import AboutUs from "../page/AboutUs/AboutUs";
import LearningResources from "./../page/LearningResources/LearningResources";
import SignUp from "./../page/Login - Register/SignUp";
import Login from "./../page/Login - Register/Login";
import LearnEnglish from "../components/LearnEnglish/LearnEnglish";
import LearnSpanish from "../components/LearnSpanish/LearnSpanish";

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
        element: <LanguageKids />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/learning-resources",
        element: <LearningResources />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/learn-english",
        element: <LearnEnglish />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "/learn-spanish",
        element: <LearnSpanish/>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "/learn-french",
        element: <h2>This is /learn-spanish 3 page.</h2>,
      },
      {
        path: "/learn-german",
        element: <h2>This is /learn-spanish 4 page.</h2>,
      },
      {
        path: "/learn-chinese",
        element: <h2>This is /learn-spanish 5 page.</h2>,
      },
    ],
  },
]);
