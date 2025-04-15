import { ComponentType } from "react";
import StartPage from "../pages/StartPage/StartPage";
import SurveyPage from "../pages/SurveyPage/SurveyPage";
import MainPage from "../pages/MainPage/MainPage";

export interface IRoute {
  path: string;
  isIndex: boolean;
  component: ComponentType;
}

export const appRoutes: IRoute[] = [
  { path: "/", isIndex: true, component: StartPage },
  { path: "/survey", isIndex: false, component: SurveyPage },
  { path: "/main", isIndex: false, component: MainPage },
];
