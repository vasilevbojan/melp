import { useFetchAll } from "../../data/dataFetch";
import RestaurantCard from "../HomePage/Elements/RestaurantCard";

const Favorites = () => {
  const restaurants = useFetchAll();

  const localS: string[] = JSON.parse(localStorage.getItem("favorite") || "");
  const selected = restaurants.filter((r) => {
    return localS.some((fav) => {
      return r.id === fav;
    });
  });

  return (
    <div className="container">
      <h3 className="text-center mb-4 ">YOUR FAVORITE RESTAURANTS</h3>
      <div className="row">
        {selected.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
