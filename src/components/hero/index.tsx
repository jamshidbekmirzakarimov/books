// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import HeroBg from "../../assets/Images/herobg.svg";
const Hero = () => {
  return (
    <>
      <section className="pt-[54px]">
        <div className="container-box">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 1000 }}
          >
            <SwiperSlide>
              <div className="h-[346px] w-full">
                <h2 className="absolute z-[9999999999] top-[45px] font-rotterburg left-[86px] text-[61px] font-normal text-[#C9AC8C] max-w-[337px] leading-[70px]">
                  Temuriylar davri adabiyoti
                </h2>
                <div className="w-full relative -z-50">
                  <img className="" src={HeroBg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[346px] w-full">
                <h2 className="absolute z-[9999999999] top-[45px] font-rotterburg left-[86px] text-[61px] font-normal text-[#C9AC8C] max-w-[337px] leading-[70px]">
                  Temuriylar davri adabiyoti
                </h2>
                <div className="w-full relative -z-50">
                  <img className="" src={HeroBg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[346px] w-full">
                <h2 className="absolute z-[9999999999] top-[45px] font-rotterburg left-[86px] text-[61px] font-normal text-[#C9AC8C] max-w-[337px] leading-[70px]">
                  Temuriylar davri adabiyoti
                </h2>
                <div className="w-full relative -z-50">
                  <img className="" src={HeroBg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
