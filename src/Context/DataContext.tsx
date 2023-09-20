import { createContext, useContext, useEffect, useState } from "react";
import { RestaurantsType } from "../interfaces/types";

interface ContextValue {
  restaurants: RestaurantsType[];
  setRestaurants: (restaurants: RestaurantsType[]) => void;
  setFavorites: (fs: string[]) => void;
  favorites: string[];
}
export const AuthContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: React.ReactNode;
}

export const AuthContextConstructor = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorite", JSON.stringify(favorites));
    } else {
      setFavorites(JSON.parse(localStorage.getItem("favorite")!) || "");
    }
  }, [favorites]);

  useEffect(() => {
    fetch(`https://data-api-jet.vercel.app/restaurants`)
      .then((res) => res.json())
      .then((data: RestaurantsType[]) => setRestaurants(data));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        restaurants,
        setFavorites,
        favorites,
        setRestaurants,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useData = () => useContext(AuthContext);
