import { Button } from "@telegram-apps/telegram-ui";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import ImageWithLoading from "../../components/ImageWithLoading/ImageWithLoading";
import SubscriptionBanner from "../../components/SubscriptionBanner/SubscriptionBanner";
import { useState } from "react";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import { useTranslation } from "react-i18next";

const HabitPage = () => {
  const [isBannnerShow, setIsBannerShow] = useState<boolean>(true);

  const { t } = useTranslation()

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={false}>
        <div className="page">
          <div className="container flex justify-center">
            {isBannnerShow && (
              <div className="w-full h-screen absolute z-[10] bg-apptext opacity-10"></div>
            )}
            <div className="flex flex-col justify-between h-screen max-w-[402px] pb-[32px] pt-[74px]">
              <div className="flex flex-col items-center">
                <ImageWithLoading
                  className="w-[256px] h-[256px] mb-[24px] smtg:mb-[35px]"
                  src="./images/habit.png"
                  alt="duck"
                />
                <div className="flex flex-col gap-1 text-[28px] font-bold smtg:text-[34px] uppercase mb-4">
                  <form>
                    <div>{t("iWant")}</div>
                    <div className="relative w-full">
                      <input
                        required
                        type="text"
                        className="w-full placeholder:text-accenttext placeholder:opacity-50 outline-none placeholder:uppercase"
                        placeholder={t("to_do_something")}
                      />
                      <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-accenttext rounded-xl" />
                    </div>
                    <div className="flex gap-[12px]">
                      <div className="relative w-[40px]">
                        <input
                          required
                          type="number"
                          className="w-full placeholder:text-accenttext placeholder:opacity-50 outline-none"
                          placeholder="1"
                        />
                        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-accenttext rounded-xl" />
                      </div>
                      <div>{t("per_day")}</div>
                    </div>
                  </form>
                </div>
                {isBannnerShow && (
                  <SubscriptionBanner setIsBannerShow={setIsBannerShow} />
                )}
              </div>
              <Button style={{ width: "100%" }}>{t("add_a_habit")}</Button>
            </div>
          </div>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default HabitPage;
