import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router";

const MainPage = () => {
  return <RouterProvider router={router} />;
};

export default MainPage;
