import { FC, MouseEvent, RefObject, useEffect, useRef, useState } from "react";
import { IHabit } from "../../models/IHabit";
import { Cell } from "@telegram-apps/telegram-ui";
import {
  calculateFullDaysPassed,
  calculateProgressToEnd,
} from "../../helpers/calculateHabitTime";
import useItemActionsList from "../../store/useItemActionsList";
import ItemActionsList from "../ItemActionsList/ItemActionsList";
import { handleHapticFeedback } from "../../helpers/handleHapticFeedback";

interface HabitItemProps {
  habit: IHabit;
  isLast: boolean;
}

const HabitItem: FC<HabitItemProps> = ({ habit }) => {
  const ref = useRef<RefObject<HTMLElement>>(null);
  // const [shown, setShown] = useState<boolean>(true);
  const { openItemId, openMenu } = useItemActionsList();
  const isOpen = openItemId === habit.id;

  const [itemProgress, setItemProgress] = useState<number>();
  const [itemDaysPassed, setItemDaysPassed] = useState<number>();

  useEffect(() => {
    const percentage = calculateProgressToEnd(habit);
    setItemProgress(percentage);
    const passedDays = calculateFullDaysPassed(habit);
    setItemDaysPassed(passedDays);
  }, []);

  const isProcess = habit.status !== "completed";

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openMenu(habit.id);
  };

  return (
    <li className="relative habit-item">
      {isOpen && <ItemActionsList />}
      <div
        onClick={(e) => handleHapticFeedback(() => handleClick(e), "medium")}
      >
        <Cell
          className={`flex items-center justify-between cell-reset h-[68px] relative z-[1] ${
            habit.status !== "completed" ? "bg-appsecondary" : "bg-appgray"
          }`}
          ref={ref}
        >
          {isProcess && (
            <div
              style={{ width: `${itemProgress}%` }}
              className="absolute left-0 z-[1] bg-appyellow h-full top-0 bottom-0 rounded-xl"
            />
          )}
          <div className="text-[15px] font-normal flex flex-col gap-[2px] relative z-[2]">
            <div>{habit.name}</div>
            <span id="id" className="text-apphint">
              {isProcess ? `${itemDaysPassed} days left` : "Not completed"}
            </span>
          </div>
          <div className="text-[28px] font-semibold relative z-[2]">
            {isProcess ? (
              `${itemProgress}% done`
            ) : (
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.58579 29.2132L29.2132 6.58578M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
                  stroke="#232323"
                  strokeWidth="3"
                />
              </svg>
            )}
          </div>
        </Cell>
      </div>
    </li>
  );
};

export default HabitItem;
