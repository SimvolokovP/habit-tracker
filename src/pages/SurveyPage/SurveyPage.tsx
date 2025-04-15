import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import SurveyList from "../../components/SurveyList/SurveyList";
import { Button, Steps } from "@telegram-apps/telegram-ui";
import { ChangeEvent, useState } from "react";
import { useSurvey } from "../../helpers/survayList";
import { useNavigate } from "react-router-dom";

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

  return (
    <AnimatedPage>
      <div className="page">
        <div className="container flex justify-center">
          <div className="max-w-[402px] flex flex-col items-center py-[32px]">
            <img
              className="w-3xs mb-[16px]"
              src="./images/survay.png"
              alt="duck"
            />
            <div className="smtg:text-[32px] text-[24px] font-semibold text-center leading-[100%] max-w-[279px] tracking-tightext mb-[16px] smtg:mb-[65px]">
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
                  onClick={() => {
                    console.log(userSurvay);
                    navigate("/main");
                  }}
                  stretched
                >
                  {t("finish")}
                </Button>
              ) : (
                <Button
                  disabled={!userSurvay[step]?.length}
                  onClick={() => setStep((prev) => prev + 1)}
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
    </AnimatedPage>
  );
};

export default SurveyPage;
