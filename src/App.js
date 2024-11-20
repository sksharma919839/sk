import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Home />,
    },
    {
      path: "/about",
      element: <Abouts />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contacts />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
