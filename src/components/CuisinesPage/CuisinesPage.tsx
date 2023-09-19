import { useParams } from "react-router-dom";
import { useData } from "../../Context/DataContext";
import RestaurantCard from "../HomePage/Elements/RestaurantCard";

const CuisinesPage = () => {
  const { restaurants } = useData();

  let { category } = useParams<string>();
  let filtered = restaurants.filter(
    (restaurant) => restaurant.restauranttype === category
  );
  return (
    <div className="container">
      <h3 className="text-center mb-4 text-uppercase ">
        {category} RESTAURANTS
      </h3>
      <div className="row">
        {filtered?.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default CuisinesPage;
