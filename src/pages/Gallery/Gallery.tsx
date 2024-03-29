/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHeroes } from "../../context/heroesContext";
import { Flex, Loader, Text, TextInput } from "@mantine/core";
import { TbSearch } from "react-icons/tb";
import HeroeCard from "../../components/HeroeCard/HeroeCard";
import { IHero } from "../../types/heroesTypes";

const Gallery = () => {
  const { heroes, getHeroes, isLoading } = useHeroes();
  const [filteredHeroes, setFilteredHeroes] = useState<IHero[]>([]);

  useEffect(() => {
    getHeroes();
  }, []);

  useEffect(() => {
    setFilteredHeroes(heroes);
  }, [heroes]);

  const filterHeroes = (name: string) => {
    const filtered = heroes.filter((hero: IHero) =>
      hero.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredHeroes(filtered);
  };

  return (
    <Flex p={24} bg={"white"} direction="column" gap={24}>
      <TextInput
        onChange={(e) => filterHeroes(e.target.value)}
        placeholder="SEARCH A CHARACTER ..."
        leftSection={<TbSearch size={14} />}
      />
      <Text fw={400} size="sm" c={"gray"}>
        {filteredHeroes.length} RESULTS
      </Text>
      <Flex
        wrap={"wrap"}
        gap={24}
        w={"100%"}
        align={"center"}
        justify={"center"}
      >
        {isLoading ? (
          <Flex w={"100%"} h={"100%"} align={"center"} justify={"center"}>
            <Loader size={"xl"} />
          </Flex>
        ) : (
          filteredHeroes.map((hero: IHero) => (
            <HeroeCard hero={hero} key={hero.id} />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default Gallery;
