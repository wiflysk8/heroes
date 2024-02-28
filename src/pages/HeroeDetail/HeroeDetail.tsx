import { Flex, Image, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHero } from "../../types/heroesTypes";
import HearthFilled from "../../assets/HearthFilled.svg";
import HearthUnfilled from "../../assets/HearthIconUnfilled.svg";
import { useHeroes } from "../../context/heroesContext";

const HeroeDetail = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<IHero>();
  const { addToFavs, favs } = useHeroes();

  useEffect(() => {
    //fetch current hero with the id
    const getHero = async () => {
      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
      );
      const currentHero = await res.json();
      currentHero.isFavorite = favs.some((fav) => fav.id === currentHero.id);
      setHero(currentHero);
    };
    getHero();
  }, [id, favs]);

  return (
    <Flex
      bg={"black"}
      gap={64}
      align={"center"}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 98% 100%, 0 100%)" }}
      mah={400}
    >
      <Image src={hero?.images.md} fit="contain" h={"100%"} />
      <Flex direction={"column"} w={"40%"} gap={24}>
        <Title order={1} fw={600} c={"white"}>
          {hero?.name}
        </Title>
        <Text c={"white"}>
          Enim ex sunt commodo amet commodo culpa deserunt ut. Elit ea ad
          eiusmod eu ut magna Lorem. Dolor excepteur labore velit deserunt in
          pariatur amet aute amet. Deserunt occaecat ullamco excepteur aliquip
          magna quis et consectetur. Irure enim eu amet mollit adipisicing duis
          laboris magna laboris sint ad.
        </Text>
      </Flex>
      <Image
        src={hero?.isFavorite ? HearthFilled : HearthUnfilled}
        style={{ zIndex: 1, cursor: "pointer" }}
        fit="contain"
        h={36}
        onClick={() => hero && addToFavs(hero)}
      />
    </Flex>
  );
};

export default HeroeDetail;
