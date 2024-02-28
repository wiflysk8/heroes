import { createBrowserRouter } from "react-router-dom";
import Gallery from "../pages/Gallery/Gallery";
import Layout from "../components/Layout/Layout";
import Favorites from "../pages/Favorites/Favorites";
import HeroeDetail from "../pages/HeroeDetail/HeroeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Gallery /> }],
  },
  {
    path: "/favorites",
    element: <Layout />,
    children: [{ path: "", element: <Favorites /> }],
  },
  {
    path: "/character/:id",
    element: <Layout />,
    children: [{ path: "", element: <HeroeDetail /> }],
  },
]);
