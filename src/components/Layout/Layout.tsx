import { Outlet } from "react-router-dom";
import Header from "../../sections/Header/Header";
import { AppContainer, BodyContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <AppContainer>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </AppContainer>
  );
};

export default Layout;
