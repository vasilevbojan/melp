import { ReviewsList } from "../../interfaces/types";

interface Props {
  reviewList: ReviewsList[];
}

const Review = ({ reviewList }: Props) => {
  return (
    <>
      {reviewList?.map((res) => {
        return (
          <div className="rounded-3 bg-light text-start p-3 mb-3" key={res.id}>
            <p>
              <span className="fw-bolder">Author: </span>
              {res.author}
            </p>
            <p>
              <span className="fw-bolder">Message: </span>
              {res.comment}
            </p>
            <p>
              <span className="fw-bolder">Stars: </span>
              {res.stars}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Review;
