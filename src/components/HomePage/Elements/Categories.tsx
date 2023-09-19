import { useData } from "../../../Context/DataContext";
import CategoryButton from "./CategoryButton";

interface Props {
  title: string;
}
export const Categories = ({ title }: Props) => {
  const { restaurants } = useData();
  let categories: string[] = [];

  restaurants.forEach((res) => {
    if (!categories.includes(res.restauranttype)) {
      categories.push(res.restauranttype);
    }
  });

  return (
    <div className="container text-center">
      <h3 className="my-3">{title}</h3>
      <div className="d-flex  justify-content-center ">
        {categories?.map((catName, i) => (
          <CategoryButton title={catName} key={catName + i} />
        ))}
      </div>
    </div>
  );
};
export default Categories;
