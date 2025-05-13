import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { Icon24ChevronLeft } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_left";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import EmptyHabits from "../../components/EmptyHabits/EmptyHabits";
import MainPageActions from "../../components/MainPageActions/MainPageActions";
import { IHabit } from "../../models/IHabit";
import HabitsList from "../../components/HabitsList/HabitsList";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import { useState } from "react";
import DateSelect from "../../components/DateSelect/DateSelect";

const myHabits: IHabit[] = [
  {
    id: 1,
    name: "Habit 1",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-24"),
    status: "not_completed",
  },
  {
    id: 2,
    name: "Habit 2",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-29"),
    status: "not_completed",
  },
  {
    id: 4,
    name: "Habit 4",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-29"),
    status: "completed",
  },
  {
    id: 5,
    name: "Habit 1",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-24"),
    status: "not_completed",
  },
  {
    id: 6,
    name: "Habit 2",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-29"),
    status: "not_completed",
  },
  {
    id: 7,
    name: "Habit 4",
    dateStart: new Date("2025-04-08"),
    dateEnd: new Date("2025-04-29"),
    status: "completed",
  },
];

const MainPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date("2025-02-14"));

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={true}>
        <div className="page">
          <div className="container flex justify-center">
            <div className="flex flex-col justify-between h-screen pb-[32px] pt-[96px] max-w-[402px]">
              {!myHabits.length ? (
                <EmptyHabits />
              ) : (
                <HabitsList habits={myHabits} />
              )}
              <div className="flex w-full justify-between items-end">
                <DateSelect
                  currentDate={currentDate}
                  setCurrentDate={setCurrentDate}
                />
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
