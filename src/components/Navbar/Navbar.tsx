import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container d-flex my-4 p-0 justify-content-between align-items-center ">
      <Link
        to="/"
        className="text-decoration-none my-3 font-weight-bolder text-dark"
      >
        <h4 className="fw-bolder ">RESTAURANT</h4>
      </Link>
      <Link to={"/favorites"}>
        <FaHeart size={40} className=" heartColor " />
      </Link>
    </div>
  );
};

export default Navbar;
