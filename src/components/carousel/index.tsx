import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

const CarouselUI = () => {
  const { t } = useTranslation();
  return (
    <Carousel autoplay={true} autoplaySpeed={4000}>
      <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
        <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[500px] leading-[65px]">
          {t("heroSection.slide1")}
        </h3>
      </div>
      <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
        <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[500px] leading-[65px]">
          {t("heroSection.slide2")}
        </h3>
      </div>
      <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
        <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[500px] leading-[65px]">
          {t("heroSection.slide3")}
        </h3>
      </div>
      <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
        <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[500px] leading-[65px]">
          {t("heroSection.slide4")}
        </h3>
      </div>
    </Carousel>
  );
};

export default CarouselUI;
