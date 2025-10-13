import { createBrowserRouter } from "react-router";
import Home from "../../modules/Home/Home";
import About from "../../modules/About/About";
import Posts from "../../modules/Posts/Posts";
import Skills from "../../modules/Skills/Skills";
import Route from "./Route/Route";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Route,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "posts",
        Component: Posts,
      },
    ],
  },
]);

export default router;
