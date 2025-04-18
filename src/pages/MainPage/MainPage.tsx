
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

import { Icon24ChevronLeft } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_left";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import EmptyHabits from "../../components/EmptyHabits/EmptyHabits";
import MainPageActions from "../../components/MainPageActions/MainPageActions";
import { IHabit } from "../../models/IHabit";
import HabitsList from "../../components/HabitsList/HabitsList";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const myHabits: IHabit[] = [
  {
    id: 1,
    name: "Habit 1",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-24"),
    status: "not_completed",
  },

  {
    id: 4,
    name: "Habit 4",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-29"),
    status: "completed",
  },
];

const MainPage = () => {
  // const { t } = useTranslation();

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={true}>
        <div className="page">
          <div className="container flex justify-center">
            <div className="flex flex-col justify-between h-screen py-[32px] max-w-[402px]">
              {!myHabits.length ? (
                <EmptyHabits />
              ) : (
                <HabitsList habits={myHabits} />
              )}
              <div className="flex w-full justify-between items-end">
                <div className="font-semibold text-[22px] flex gap-[8px] items-center smtg:text-[28px]">
                  <Icon24ChevronLeft />
                  <div>14 Feb</div>
                  <Icon24ChevronRight />
                </div>
                <MainPageActions isShareStoryBtnVisible={!!myHabits.length} />
              </div>
            </div>
          </div>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default MainPage;
