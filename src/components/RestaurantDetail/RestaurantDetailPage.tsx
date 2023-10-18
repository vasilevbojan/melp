import { useParams } from "react-router-dom";
import Review from "./review";
import { useState } from "react";
import { FetchSingle } from "../../data/dataFetch";
import supabase from "../../config/supabaseClient";
import { RestaurantsType } from "../../interfaces/types";

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const resto = FetchSingle("id", id!);

  const [newRestorants, setNewRestorants] = useState<RestaurantsType>();
  const chosenRestaurant = newRestorants || resto;

  console.log(chosenRestaurant);

  const [nameInput, setNameInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");
  const [starsInput, setStarsInput] = useState<number>(0);

  if (!chosenRestaurant) {
    return <div></div>;
  }
  const objectList = chosenRestaurant.reviewsList;

  let reviewsList = {
    id: objectList ? objectList.length : 0,
    author: nameInput,
    comment: messageInput,
    stars: starsInput,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let inputObject = {
      ...chosenRestaurant,
      reviewsList: [...chosenRestaurant.reviewsList, reviewsList],
      reviews: chosenRestaurant.reviews + 1,
    };

    setNewRestorants(inputObject);
    setMessageInput("");
    setNameInput("");
    setStarsInput(0);
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
