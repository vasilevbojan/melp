import { useData } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import Review from "./review";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestaurantsType } from "../../interfaces/types";

const RestaurantDetailPage = () => {
  const { restaurants, setRestaurants } = useData();
  let { restaurant } = useParams();

  const [chosenRestaurant, setChosenRestaurant] = useState<RestaurantsType>();

  useEffect(() => {
    setChosenRestaurant(
      restaurants.find((res) => res.slug === restaurant) as RestaurantsType
    );
  }, [restaurants, restaurant]);

  const [nameInput, setNameInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");
  const [starsInput, setStarsInput] = useState<number>(0);

  if (!chosenRestaurant) {
    return <div>Error</div>;
  }
  const objectList = chosenRestaurant.reviewsList;

  let reviewObject = {
    id: objectList ? objectList.length : 0,
    author: nameInput,
    comment: messageInput,
    stars: starsInput,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let inputObject = {
      ...chosenRestaurant,
      reviewsList: [...chosenRestaurant.reviewsList, reviewObject],
      reviews: chosenRestaurant.reviews + 1,
    };
    axios
      .put(
        `https://data-api-jet.vercel.app/restaurants/${chosenRestaurant.id}`,
        { inputObject }
      )
      .then((res) => console.log(res.data));

    // const selected = restaurants.map((restorant) => {
    //   if (restorant.id === result.data.id) {
    //     return result.data;
    //   }
    //   return restorant;
    // });
    // setRestaurants(selected);
    // setMessageInput("");
    // setNameInput("");
    // setStarsInput(0);
  };

  const rating = () => {
    let ratingStars = 0;
    chosenRestaurant.reviewsList.map(
      (reviewStars) => (ratingStars += reviewStars.stars)
    );
    if (ratingStars === 0 && chosenRestaurant.reviews === 0) {
      return 0;
    } else {
      return +(ratingStars / chosenRestaurant.reviews).toFixed(2);
    }
  };
  return (
    <div>
      <h3 className="text-center my-3 text-uppercase">
        {chosenRestaurant.businessname}
      </h3>
      <div className="container rounded-3 bg-light px-0 pb-0">
        <div className="row">
          <div className="col">
            <img
              className="rounded-top img-fluid "
              src={chosenRestaurant.image}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-4 mb-0">
            {
              <div className="pb-3">
                <p className="mb-0">
                  Rating:
                  {rating()}
                </p>{" "}
                <small>based on {chosenRestaurant.reviews} reviews</small>
              </div>
            }
            <p>Phone number:{chosenRestaurant.phone}</p>
            <p>Email:{chosenRestaurant.email}</p>
            <p>Adress:{chosenRestaurant.address}</p>
            <p>
              {chosenRestaurant.parkinglot
                ? "We have a parking lot for you"
                : "We dont have a parking lot"}
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h3 className="mb-3">REVIEWS</h3>

        <Review reviewList={chosenRestaurant.reviewsList} />
      </div>
      <div className="container rounded-3 bg-light">
        <h3 className=" text-center py-3 ">REVIEW FORM</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.currentTarget.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment
            </label>
            <input
              type="text"
              className="form-control"
              id="comment"
              value={messageInput}
              onChange={(e) => setMessageInput(e.currentTarget.value)}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="stars" className="form-label">
              Stars
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              id="stars"
              value={starsInput}
              onChange={(e) => setStarsInput(+e.currentTarget.value)}
            />{" "}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success d-grid gap-2">
              Leave a review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
