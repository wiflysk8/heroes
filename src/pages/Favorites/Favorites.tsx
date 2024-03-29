/* eslint-disable react-hooks/exhaustive-deps */
import { useHeroes } from "../../context/heroesContext";
import { Flex, Text, TextInput, Title } from "@mantine/core";
import { TbSearch } from "react-icons/tb";
import HeroeCard from "../../components/HeroeCard/HeroeCard";
import { IHero } from "../../types/heroesTypes";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { favs } = useHeroes();
  const [filteredFavs, setFilteredFavs] = useState<IHero[]>([]);

  useEffect(() => {
    setFilteredFavs(favs);
  }, [favs]);

  const filterHeroes = (name: string) => {
    const filtered = favs.filter((hero: IHero) =>
      hero.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredFavs(filtered);
  };
  return (
    <Flex p={24} w="100%" h="100%" bg={"white"} direction="column" gap={24}>
      <Title order={3} fw={800}>
        FAVORITES
      </Title>
      <TextInput
        onChange={(e) => filterHeroes(e.target.value)}
        placeholder="SEARCH A CHARACTER ..."
        w={"100%"}
        leftSection={<TbSearch size={14} />}
      />
      <Text fw={400} size="sm" c={"gray"}>
        {filteredFavs.length} RESULTS
      </Text>
      {favs.length > 0 ? (
        <Flex wrap={"wrap"} gap={24} align={"center"}>
          {filteredFavs.map((hero: IHero) => (
            <HeroeCard hero={hero} key={hero.id} />
          ))}
        </Flex>
      ) : (
        <Text>Add some Hero to Favorites</Text>
      )}
    </Flex>
  );
};

export default Favorites;
