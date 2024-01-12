import SearchBox from "../../components/search-box";

const Authors = () => {
  return (
    <div className="container-box relative">
      <h1 className="font-rotterburg text-[40px] text-center mt-[30px] text-[#c9ac8c]">
        Barcha Adiblar
      </h1>
      <div className="mt-[60px]">
        <SearchBox />
      </div>
    </div>
  );
};

export default Authors;
