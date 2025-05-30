import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import SurveyList from "../../components/SurveyList/SurveyList";
import { Button, Steps } from "@telegram-apps/telegram-ui";
import { ChangeEvent, useState } from "react";
import { useSurvey } from "../../helpers/survayList";
import { useNavigate } from "react-router-dom";
import ImageWithLoading from "../../components/ImageWithLoading/ImageWithLoading";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import { handleHapticFeedback } from "../../helpers/handleHapticFeedback";

const SurveyPage = () => {
  const [step, setStep] = useState<number>(0);
  const [userSurvay, setUserSurvay] = useState<string[][]>([]);

  const { surveyArray } = useSurvey();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updatedUserSurvay = [...userSurvay];
    if (!updatedUserSurvay[step]) {
      updatedUserSurvay[step] = [];
    }

    if (e.target.checked) {
      updatedUserSurvay[step] = [...updatedUserSurvay[step], value];
    } else {
      updatedUserSurvay[step] = updatedUserSurvay[step].filter(
        (s) => s !== value
      );
    }

    setUserSurvay(updatedUserSurvay);
  };

  const handleNextBtnClick = () => {
    setStep((prev) => prev + 1);
  };

  const handleFinishBtnClick = () => {
    console.log(userSurvay);
    navigate("/main");
  };

  return (
    <AnimatedPage>
      <TelegramNavigation isMainPage={true}>
        <div className="page">
          <div className="container flex justify-center">
            <div className="max-w-[402px] flex flex-col items-center py-[32px]">
              <ImageWithLoading
                className="w-3xs mb-[16px] h-[256px] rounded-full"
                src="./images/survay.png"
                alt="duck"
              />
              <div className="h-[72px] smtg:text-[32px] text-[24px] font-semibold text-center leading-[100%] max-w-[279px] tracking-tightext mb-[12px] smtg:mb-[65px]">
                {surveyArray[step]?.name || ""}
              </div>

              <SurveyList
                items={surveyArray[step]?.items || []}
                handleSelect={handleSelect}
              />
              <div className="w-full max-w-xs">
                {step + 1 === surveyArray.length ? (
                  <Button
                    disabled={!userSurvay[step]?.length}
                    onClick={() =>
                      handleHapticFeedback(handleFinishBtnClick, "medium")
                    }
                    stretched
                  >
                    {t("finish")}
                  </Button>
                ) : (
                  <Button
                    disabled={!userSurvay[step]?.length}
                    onClick={() =>
                      handleHapticFeedback(handleNextBtnClick, "medium")
                    }
                    stretched
                  >
                    {t("next")}
                  </Button>
                )}
                <Steps count={surveyArray.length} progress={step + 1} />
              </div>
            </div>
          </div>
        </div>
      </TelegramNavigation>
    </AnimatedPage>
  );
};

export default SurveyPage;
