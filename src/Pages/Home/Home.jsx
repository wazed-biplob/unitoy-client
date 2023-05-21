import Banner from "../../Sections/Banner/Banner";
import Carousel from "../../Sections/Carousel/Carousel";
import DollFinder from "../../Sections/DollFinder/DollFinder";
import Gallery from "../../Sections/Gallery/Gallery";
import ShopByCategory from "../../Sections/ShopByCategory/ShopByCategory";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ShopByCategory />
      <Carousel />
      <Gallery />
      <DollFinder />
    </div>
  );
};

export default Home;
