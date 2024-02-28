import { Divider, Image, Text } from "@mantine/core";
import { IHero } from "../../types/heroesTypes";
import { CardBottom, CardContainer } from "./HeroeCard.styles";
import { useHeroes } from "../../context/heroesContext";
import HearthFilled from "../../assets/HearthFilled.svg";
import HearthUnfilled from "../../assets/HearthIconUnfilled.svg";
import { Link, generatePath } from "react-router-dom";

interface HeroeCardProps {
  hero: IHero;
}

const HeroeCard = ({ hero }: HeroeCardProps) => {
  const { addToFavs } = useHeroes();

  const handleHeartClick = (e: React.MouseEvent<HTMLImageElement>) => {
    addToFavs(hero);
    e.preventDefault();
  };

  return (
    <Link to={generatePath("/character/:id", { id: hero.id })}>
      <CardContainer>
        <Image src={hero.images.md} alt={hero.name} fit="contain" />
        <Divider color="#4b0002" size={"xl"} />
        <CardBottom>
          <Text size="xs" style={{ zIndex: 1 }}>
            {hero.name.toUpperCase()}
          </Text>
          <Image
            src={hero.isFavorite ? HearthFilled : HearthUnfilled}
            style={{ zIndex: 1, pointerEvents: "auto" }}
            fit="contain"
            h={18}
            onClick={handleHeartClick}
          />
        </CardBottom>
      </CardContainer>
    </Link>
  );
};

export default HeroeCard;
