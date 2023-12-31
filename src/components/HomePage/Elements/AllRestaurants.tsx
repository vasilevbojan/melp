import RestaurantCard from "./RestaurantCard";
import { useFetchAll } from "../../../data/dataFetch";

interface Props {
  title: string;
}

const AllRestaurants = ({ title }: Props) => {
  const restaurants = useFetchAll();
  return (
    <div className="container">
      <h3 className="text-center mb-4 ">{title}</h3>
      <div className="row allRestaurants">
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default AllRestaurants;
