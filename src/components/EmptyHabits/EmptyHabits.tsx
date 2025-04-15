import { useTranslation } from "react-i18next";
import ImageWithLoading from "../ImageWithLoading/ImageWithLoading";

const EmptyHabits = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[52px] flex items-center flex-col gap-2">
      <ImageWithLoading
        className="w-[256px] h-[256px]"
        alt="duck"
        src="./images/empty.png"
      />
      <p className="max-w-[242px] text-center text-[16px] font-medium tracking-tightext leading-[22px]">
        {t("your_habits_will_be_here")} <br /> {t("click_add_btn")}
      </p>
    </div>
  );
};

export default EmptyHabits;
