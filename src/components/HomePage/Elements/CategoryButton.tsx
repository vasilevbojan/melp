import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const CategoryButton = ({ title }: Props) => {
  return (
    <Link
      to={`/cuisines/${title}`}
      className="btn btn-orange mx-3 px-3 text-uppercase"
    >
      {title}
    </Link>
  );
};

export default CategoryButton;
