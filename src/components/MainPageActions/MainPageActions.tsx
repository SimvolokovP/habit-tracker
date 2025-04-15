import { Button } from "@telegram-apps/telegram-ui";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import ShareStoryBtn from "../ShareStoryBtn/ShareStoryBtn";
// import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";

interface MainPageActionsProps {
  isShareStoryBtnVisible?: boolean;
}

const MainPageActions: FC<MainPageActionsProps> = ({
  isShareStoryBtnVisible = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-[16px] flex-col">
      {isShareStoryBtnVisible && <ShareStoryBtn />}
      <div className="flex items-center gap-[16px] w-[160px]">
        <InlineButtonsItem
          className="btn-small"
          onClick={() => console.log("Click")}
          mode="bezeled"
          text={t("add_new")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12.9 7C12.9 6.50294 12.4971 6.1 12 6.1C11.5029 6.1 11.1 6.50294 11.1 7V11.1H7C6.50294 11.1 6.1 11.5029 6.1 12C6.1 12.4971 6.50294 12.9 7 12.9H11.1V17C11.1 17.4971 11.5029 17.9 12 17.9C12.4971 17.9 12.9 17.4971 12.9 17V12.9H17C17.4971 12.9 17.9 12.4971 17.9 12C17.9 11.5029 17.4971 11.1 17 11.1H12.9V7Z"
              fill="#31D158"
            />
          </svg>
        </InlineButtonsItem>
        <InlineButtonsItem
          className="btn-small"
          onClick={() => console.log("Click")}
          mode="bezeled"
          text={t("progress")}
        >
          <svg
            className="tg-icon"
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.8999 19.9C4.40285 19.9 3.9999 19.497 3.9999 19L3.9999 9.99998C3.9999 9.50292 4.40284 9.09998 4.8999 9.09998C5.39696 9.09998 5.7999 9.50292 5.7999 9.99998V19C5.7999 19.497 5.39696 19.9 4.8999 19.9ZM8.8999 19.9C8.40285 19.9 7.9999 19.497 7.9999 19L7.9999 5.99998C7.9999 5.50292 8.40285 5.09998 8.8999 5.09998C9.39696 5.09998 9.7999 5.50292 9.7999 5.99998L9.7999 19C9.7999 19.497 9.39696 19.9 8.8999 19.9ZM12.8999 19.9C12.4028 19.9 11.9999 19.497 11.9999 19L11.9999 0.999975C11.9999 0.50292 12.4028 0.0999756 12.8999 0.0999756C13.397 0.0999756 13.7999 0.50292 13.7999 0.999975L13.7999 19C13.7999 19.497 13.397 19.9 12.8999 19.9Z"
              fill="#007AFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.900001 19.9C0.402945 19.9 4.15129e-07 19.4971 3.93402e-07 19L0 14C-2.1727e-08 13.5029 0.402943 13.1 0.9 13.1C1.39706 13.1 1.8 13.5029 1.8 14L1.8 19C1.8 19.4971 1.39706 19.9 0.900001 19.9Z"
              fill="#007AFF"
            />
          </svg>
        </InlineButtonsItem>
      </div>
    </div>
  );
};

export default MainPageActions;
