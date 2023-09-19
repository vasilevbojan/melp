import AllRestaurants from "./Elements/AllRestaurants";
import Categories from "./Elements/Categories";
import MostPopular from "./Elements/MostPopular";
import SurpriseMe from "./Elements/SurpriseMe";

const HomePage = () => {
  return (
    <>
      <SurpriseMe title="DON'T KNOW WHAT TO EAT?" />
      <MostPopular title="OUR MOST POPULAR RESTAURANTS" />
      <Categories title="CUISINES" />
      <AllRestaurants title="ALL RESTAURANTS" />
    </>
  );
};

export default HomePage;
