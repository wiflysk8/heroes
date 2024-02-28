import { Flex, Image, Loader, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHero } from "../../types/heroesTypes";
import HearthFilled from "../../assets/HearthFilled.svg";
import HearthUnfilled from "../../assets/HearthIconUnfilled.svg";
import { useHeroes } from "../../context/heroesContext";
import { DetailHeader } from "./HeroeDetail.styles";

const HeroeDetail = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<IHero>();
  const { addToFavs, favs } = useHeroes();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getHero = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
      );
      const currentHero = await res.json();
      currentHero.isFavorite = favs.some((fav) => fav.id === currentHero.id);
      setHero(currentHero);
      setIsLoading(false);
    };
    getHero();
  }, [id, favs]);

  return isLoading ? (
    <Flex align={"center"} justify={"center"}>
      <Loader size={"xl"} />
    </Flex>
  ) : (
    <DetailHeader>
      <Image src={hero?.images.md} fit="contain" h={"100%"} />
      <Flex direction={"column"} gap={36} align={"center"} p={24}>
        <Flex justify={"space-between"} align={"center"} w={"100%"}>
          <Title order={1} fw={600} c={"white"}>
            {hero?.name}
          </Title>
          <Image
            src={hero?.isFavorite ? HearthFilled : HearthUnfilled}
            style={{ zIndex: 1, cursor: "pointer" }}
            fit="contain"
            h={36}
            onClick={() => hero && addToFavs(hero)}
          />
        </Flex>
        <Text c={"white"} maw={800}>
          Enim ex sunt commodo amet commodo culpa deserunt ut. Elit ea ad
          eiusmod eu ut magna Lorem. Dolor excepteur labore velit deserunt in
          pariatur amet aute amet.
        </Text>
      </Flex>
    </DetailHeader>
  );
};

export default HeroeDetail;
