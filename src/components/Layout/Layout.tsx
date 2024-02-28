import { Outlet } from "react-router-dom";
import Header from "../../sections/Header/Header";
import { AppContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  );
};

export default Layout;
