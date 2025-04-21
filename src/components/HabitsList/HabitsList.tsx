import { FC } from "react";
import { IHabit } from "../../models/IHabit";
import HabitItem from "../HabitItem/HabitItem";

interface HabitsListProps {
  habits: IHabit[];
}

const HabitsList: FC<HabitsListProps> = ({ habits }) => {
  return (
    <ul className="flex flex-col gap-[16px]">
      {habits.map((h, index) => (
        <HabitItem key={h.id} habit={h} isLast={index === habits.length - 1} />
      ))}
    </ul>
  );
};

export default HabitsList;
