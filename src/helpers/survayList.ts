export type TSurvey = { text: string; value: number | string };
export interface ISurveyItem {
  name: string;
  items: TSurvey[];
}

import { useTranslation } from "react-i18next";

export const useSurvey = () => {
  const { t } = useTranslation();

  const surveyArray: ISurveyItem[] = [
    {
      items: [
        { text: t("survey_list_one.0.text"), value: 1 },
        { text: t("survey_list_one.1.text"), value: 2 },
        { text: t("survey_list_one.2.text"), value: 3 },
        { text: t("survey_list_one.3.text"), value: 4 },
      ],
      name: t("what_do_you_want_to_achieve"),
    },
    {
      items: [
        { text: t("survey_list_two.0.text"), value: 5 },
        { text: t("survey_list_two.1.text"), value: 6 },
        { text: t("survey_list_two.2.text"), value: 7 },
        { text: t("survey_list_two.3.text"), value: 8 },
      ],
      name: t("what_are_the_most_important_goals_right_now"),
    },
    {
      items: [
        { text: t("survey_list_three.0.text"), value: 9 },
        { text: t("survey_list_three.1.text"), value: 10 },
        { text: t("survey_list_three.2.text"), value: 11 },
        { text: t("survey_list_three.3.text"), value: 12 },
      ],
      name: t("how_often_do_you_give_up_what_you_started"),
    },
  ];

  return {
    surveyArray,
  };
};
