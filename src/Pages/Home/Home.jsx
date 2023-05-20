import Banner from "../../Sections/Banner/Banner";
import DollFinder from "../../Sections/DollFinder/DollFinder";
import ShopByCategory from "../../Sections/ShopByCategory/ShopByCategory";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ShopByCategory />
      <DollFinder />
    </div>
  );
};

export default Home;
