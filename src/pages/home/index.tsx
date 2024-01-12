import CarouselUI from "../../components/carousel";
import SearchBox from "../../components/search-box";
import Tabs from "../../components/tabs";

const Home = () => {
  return (
    <div className="container-box">
      <div className=" relative">
        <div className="mt-[54px] rounded-[21px] overflow-hidden">
          <CarouselUI />
        </div>

        <div
          className="absolute bottom-[-100px] left-[50%] max-w-[1080px] w-full"
          style={{ transform: "translate(-50%, 0)" }}
        >
          <SearchBox />
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Home;
