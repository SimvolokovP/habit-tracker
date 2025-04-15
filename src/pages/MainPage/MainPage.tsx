import { useTranslation } from "react-i18next";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <div className="page">
        <div className="container flex justify-center"></div>
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
