import { useParams } from "react-router-dom";
import RestaurantCard from "../HomePage/Elements/RestaurantCard";
import { FetchColumn } from "../../data/dataFetch";

const CuisinesPage = () => {
  let { category } = useParams<string>();
  const restaurants = FetchColumn("restauranttype", category);

  return (
    <div className="container">
      <h3 className="text-center mb-4 text-uppercase ">
        {category} RESTAURANTS
      </h3>
      <div className="row">
        {restaurants?.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default CuisinesPage;
