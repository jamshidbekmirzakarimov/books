import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-[#191919] bg-white mx-auto max-w-[1080px] rounded-[15px] flex items-center flex-col justify-center w-full px-[86px] pt-[30px] pb-[30px] shadow-md">
      <h2 className="text-center text-[25px] font-rotterburg text-[#c9ac8c]">
        {t("searchSection.title")}
      </h2>
      <div className="w-full flex items-center gap-[14px] mt-[13px]">
        <Input className="dark:bg-[#191919] dark:text-white" size="large" placeholder={t("searchSection.inputPl")} />
        <Button type="primary" icon={<SearchOutlined />}>
          {t("searchSection.btn")}
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
