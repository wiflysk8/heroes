import { Flex, Image, Text } from "@mantine/core";
import Logo from "../../assets/Marvel logo.svg";
import HearthFilled from "../../assets/HearthFilled.svg";
import { useHeroes } from "../../context/heroesContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { favs } = useHeroes();
  const navigate = useNavigate();
  return (
    <Flex
      justify="space-between"
      align="center"
      px={48}
      w="100%"
      h={85}
      bg="black"
      style={{ borderBottom: "1px solid gray" }}
    >
      <Image
        src={Logo}
        alt="Marvel logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <Flex gap={8} onClick={() => navigate("/favorites")}>
        <Image
          src={HearthFilled}
          alt="Hearth Filled"
          style={{ cursor: "pointer" }}
        />
        <Text color="white">{favs?.length}</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
