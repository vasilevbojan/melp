import { RestaurantsType } from "../../../interfaces/types";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataContext";

interface Props {
  restaurant: RestaurantsType;
}

export const RestaurantCard = ({ restaurant }: Props) => {
  const { setFavorites, favorites } = useData();

  const rating = () => {
    let ratingStars = 0;
    restaurant.reviewsList?.map(
      (reviewStars) => (ratingStars += reviewStars.stars)
    );
    if (ratingStars === 0 && restaurant.reviews === 0) {
      return 0;
    } else {
      return +(ratingStars / restaurant.reviews).toFixed(2);
    }
  };

  let isFavorite = false;
  if (favorites) {
    isFavorite = !!favorites.find((f) => restaurant.id === f);
  }

  return (
    <div className="cardsWidth mb-3">
      <div className="card h-100 position-relative bg-body-tertiary">
        <div
          onClick={() => {
            if (!isFavorite) {
              setFavorites([...favorites, restaurant.id]);
            } else {
              setFavorites(favorites.filter((fav) => fav !== restaurant.id));
            }
          }}
        >
          {isFavorite ? (
            <FaHeart
              size={30}
              className="position-absolute heartColor favoritePosition "
            />
          ) : (
            <FaRegHeart
              size={30}
              className="position-absolute heartColor favoritePosition "
            />
          )}
        </div>
        <Link
          className="text-decoration-none"
          to={`/restaurant/${restaurant.id}`}
        >
          <img
            src={restaurant?.image}
            className="card-img-top"
            alt="Restaurant"
            height={150}
          />
          <div className="card-body ">
            <h5 className="card-title">{restaurant?.businessname}</h5>
            <p className="card-text restorantType fw-bolder">
              {restaurant?.restauranttype}
            </p>
          </div>
          {rating() > 0 && (
            <div className="card-footer mb-0 ">
              <p className="m-0">Rating: {rating()}</p>
              <p className="m-0">
                <small className="text-body-secondary">
                  based on {restaurant?.reviews} reviews
                </small>
              </p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
