import { Cell, Multiselectable } from "@telegram-apps/telegram-ui";
import { ChangeEvent, FC } from "react";
import { TSurvey } from "../../helpers/survayList";

interface SurveyListProps {
  items: TSurvey[];
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SurveyList: FC<SurveyListProps> = ({ items, handleSelect }) => {
  return (
    <form className="w-full">
      {items &&
        items.map((item) => (
          <Cell
            key={item.text + item.value}
            Component="label"
            before={
              <Multiselectable
                onChange={handleSelect}
                name="multiselect"
                value={item.value}
              />
            }
            multiline
          >
            {item.text}
          </Cell>
        ))}
    </form>
  );
};

export default SurveyList;
