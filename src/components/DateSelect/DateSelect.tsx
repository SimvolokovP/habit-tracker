import { Icon24ChevronLeft } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_left";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import { Dispatch, FC, SetStateAction } from "react";

interface DateSelectProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const DateSelect: FC<DateSelectProps> = ({ currentDate, setCurrentDate }) => {
  const handlePrevDay = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="font-semibold flex gap-[8px] w-full items-center smtg:text-[28px]">
      <button onClick={handlePrevDay} className="cursor-pointer">
        <Icon24ChevronLeft />
      </button>
      <div className="text-[18px] w-[62px]">{formatDate(currentDate)}</div>
      <button onClick={handleNextDay} className="cursor-pointer">
        <Icon24ChevronRight />
      </button>
    </div>
  );
};

export default DateSelect;
