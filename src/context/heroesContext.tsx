/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { IHero } from "../types/heroesTypes";
import { fetchHeroes } from "../services/heroesService";

interface HeroesContext {
  heroes: IHero[];
  getHeroes: () => void;
  setHeroes: (heroes: IHero[]) => void;
  isLoading: boolean;
  addToFavs: (hero: IHero) => void;
  favs: IHero[];
}

interface HeroesContextProps {
  children: JSX.Element;
}

const heroesContext = createContext({} as HeroesContext);

export const HeroesProvider = ({ children }: HeroesContextProps) => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favs, setFavs] = useState<IHero[]>([]);

  useEffect(() => {
    if (localStorage.getItem("favs")) {
      setFavs(JSON.parse(localStorage.getItem("favs") || "[]"));
    }
    heroes.forEach((hero) => {
      hero.isFavorite = favs.some((fav) => fav.id === hero.id);
    });
  }, [heroes]);

  const addToFavs = (hero: IHero) => {
    if (favs.some((fav) => fav.id === hero.id)) {
      const newFavs = favs.filter((fav) => fav.id !== hero.id);
      hero.isFavorite = false;
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    } else {
      hero.isFavorite = true;
      setFavs([...favs, hero]);
      localStorage.setItem("favs", JSON.stringify([...favs, hero]));
    }
  };
  const getHeroes = async () => {
    setIsLoading(true);
    fetchHeroes().then((data) => {
      setHeroes(data.slice(0, 50));
    });
    setIsLoading(false);
  };

  return (
    <heroesContext.Provider
      value={{ heroes, setHeroes, isLoading, getHeroes, addToFavs, favs }}
    >
      {children}
    </heroesContext.Provider>
  );
};

export const useHeroes = () => {
  return useContext(heroesContext);
};
