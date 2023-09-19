import { useData } from "../../../Context/DataContext";
import RestaurantCard from "./RestaurantCard";

interface Props {
  title: string;
}

export const MostPopular = ({ title }: Props) => {
  const { restaurants } = useData();
  let mostPopularRestaurants = restaurants
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);
  return (
    <div className="container">
      <h3 className="text-center mb-4 ">{title}</h3>
      <div className="row mostPopular">
        {mostPopularRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default MostPopular;
