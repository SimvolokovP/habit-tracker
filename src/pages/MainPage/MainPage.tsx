import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

import { Icon24ChevronLeft } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_left";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import EmptyHabits from "../../components/EmptyHabits/EmptyHabits";
import MainPageActions from "../../components/MainPageActions/MainPageActions";
import { IHabit } from "../../models/IHabit";
import HabitsList from "../../components/HabitsList/HabitsList";

const myHabits: IHabit[] = [
  {
    id: 1,
    name: "Habit 1",
    dateStart: "1",
    dateEnd: "1",
    status: "not_completed",
  },
  {
    id: 2,
    name: "Habit 2",
    dateStart: "1",
    dateEnd: "1",
    status: "not_completed",
  },
  {
    id: 3,
    name: "Habit 3",
    dateStart: "1",
    dateEnd: "1",
    status: "not_completed",
  },
  {
    id: 4,
    name: "Habit 4",
    dateStart: "1",
    dateEnd: "1",
    status: "completed",
  },
  {
    id: 5,
    name: "Habit 5",
    dateStart: "1",
    dateEnd: "1",
    status: "not_completed",
  },
];

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
};

export default MainPage;
