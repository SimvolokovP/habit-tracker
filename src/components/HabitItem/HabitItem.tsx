import {
  CSSProperties,
  FC,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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

  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("bottom");
  const [menuStyles, setMenuStyles] = useState<CSSProperties>({});

  const [itemProgress, setItemProgress] = useState<number>();
  const [itemDaysPassed, setItemDaysPassed] = useState<number>();

  useEffect(() => {
    const percentage = calculateProgressToEnd(habit);
    setItemProgress(percentage);
    const passedDays = calculateFullDaysPassed(habit);
    setItemDaysPassed(passedDays);
  }, []);

  const isProcess = habit.status !== "completed";

  // const handleClick = (e: MouseEvent<HTMLDivElement>) => {

  // };

  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleOpenMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openMenu(habit.id);
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      const menuHeight = 348;

      const itemPlusGapHeight = 84;
      const itemHeight = 68;

      if (spaceBelow >= menuHeight || spaceBelow > spaceAbove) {
        setMenuPosition("bottom");
        console.log(rect.bottom);
        setMenuStyles({
          position: "absolute",
          top: rect.bottom - itemPlusGapHeight + 16,
          left: rect.left + window.scrollX,
          minWidth: rect.width,
        });
      } else {
        setMenuPosition("top");
        console.log("top");
        setMenuStyles({
          position: "absolute",
          top: rect.top - menuHeight - itemHeight - 16,
          left: rect.left + window.scrollX,
          minWidth: rect.width,
        });
      }
    }
  };

  return (
    <li className="habit-item">
      {isOpen && (
        <div style={menuStyles} className="menu-container">
          <ItemActionsList />
        </div>
      )}
      <div
        ref={itemRef}
        onClick={(e) => handleHapticFeedback(() => handleOpenMenu(e), "medium")}
      >
        <Cell
          className={`flex items-center justify-between cell-reset h-[68px] relative z-[1] ${
            habit.status !== "completed"
              ? "bg-[var(--tg-theme-bg-color)]"
              : "bg-appgray"
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
