import { useNavigate } from "react-router-dom";
import { useFetchAll } from "../../../data/dataFetch";

interface Props {
  title: string;
}

const SurpriseMe = ({ title }: Props) => {
  let navigate = useNavigate();
  const restaurants = useFetchAll();

  const surpriseHandle = () => {
    let randomPick = Math.floor(Math.random() * (restaurants.length - 1)) + 1;
    navigate(`restaurant/${restaurants[randomPick].id}`);
    console.log(randomPick);
  };
  return (
    <div className="container text-center">
      <h3>{title}</h3>
      <div className="d-grid ">
        <button
          type="button"
          className="btn btn-success "
          onClick={surpriseHandle}
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
};

export default SurpriseMe;
