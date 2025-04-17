import { useNavigate } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";

const isFirst = false;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    isFirst ? navigate("/") : navigate("/main");
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
