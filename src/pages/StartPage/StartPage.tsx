import { Button } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { Link } from "react-router-dom";
import ImageWithLoading from "../../components/ImageWithLoading/ImageWithLoading";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const StartPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={true}>
        <div className="page">
          <div className="container flex justify-center">
            <div className="max-w-[402px] flex flex-col items-center py-[32px]">
              <p className="font-bold uppercase greeting-text mb-[42px] smtg:mb-[65px]">
                {t("are_your_ready")} <br /> {t("to_start")} <br />
                <span className="text-accenttext">
                  {t("working")} <br /> {t("on_yourself")}
                </span>
                ?
              </p>
              <ImageWithLoading
                className="w-3xs h-[256px] mb-[65px] smtg:mb-[95px]"
                src="./images/start.png"
                alt="duck"
              />
              <Link to={"/survey"} style={{ width: "100%" }}>
                <Button style={{ width: "100%" }} size="l" mode="filled">
                  {t("lets_go")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default StartPage;
