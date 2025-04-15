import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

import { Icon24ChevronLeft } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_left";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import EmptyHabits from "../../components/EmptyHabits/EmptyHabits";
import MainPageActions from "../../components/MainPageActions/MainPageActions";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <div className="page">
        <div className="container">
          <div className="flex flex-col justify-between h-screen py-[32px]">
            <EmptyHabits />
            <div className="flex items-center w-full justify-between">
              <div className="font-semibold text-[22px] flex gap-[8px] items-center smtg:text-[28px]">
                <Icon24ChevronLeft />
                <div>14 Feb</div>
                <Icon24ChevronRight />
              </div>
              <MainPageActions />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
