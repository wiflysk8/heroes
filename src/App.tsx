import "@mantine/core/styles.css";
import MainPage from "./pages/MainPage/MainPage";
import { HeroesProvider } from "./context/heroesContext";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <HeroesProvider>
        <MainPage />
      </HeroesProvider>
    </MantineProvider>
  );
}

export default App;
