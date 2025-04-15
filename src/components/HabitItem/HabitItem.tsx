import { FC, RefObject, useRef, useState } from "react";
import { IHabit } from "../../models/IHabit";
import { Cell, Tooltip } from "@telegram-apps/telegram-ui";

interface HabitItemProps {
  habit: IHabit;
  isLast: boolean;
}

const HabitItem: FC<HabitItemProps> = ({ habit, isLast }) => {
  const ref = useRef<RefObject<HTMLElement>>(null);
  const [shown, setShown] = useState<boolean>(true);

  return (
    <li>
      <Cell
        className={`flex items-center justify-between cell-reset h-[68px] ${
          habit.status !== "completed" ? "bg-appsecondary" : "bg-appgray"
        }`}
        ref={ref}
        onClick={() => setShown(false)}
      >
        <div className="text-[15px] font-normal flex flex-col gap-[2px]">
          <div>{habit.name}</div>
          <span className="text-apphint">
            {habit.status !== "completed" ? "Todays left" : "Not completed"}
          </span>
        </div>
        <div className="text-[28px] font-semibold">
          {habit.status !== "completed" ? (
            "1"
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
      {/* {isLast && shown ? (
        <Tooltip mode="dark" placement="bottom-start" targetRef={ref}>
          Hold to change the status of a habit.
        </Tooltip>
      ) : (
        <></>
      )} */}
    </li>
  );
};

export default HabitItem;
