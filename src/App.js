import { useEffect, useState } from "react";
import "./App.css";
import AboutSec from "./Components/AboutSec";
import Backtotop from "./Components/Backtotop";
import Faq from "./Components/Faq";
import MyFooter from "./Components/MyFooter";
import MyHeader from "./Components/MyHeader";
import Preload from "./Components/Preload";
import RoadMap from "./Components/RoadMap";
import Tokenimics from "./Components/Tokenimics";
import Utility from "./Components/Utility";

function App() {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    setfirst(true);
    setTimeout(() => {
      setfirst(false);
    }, 3000);
  }, []);

  return (
    <div>
      {first ? (
        <>
          <Preload />
        </>
      ) : (
        <div className="App">
          <MyHeader />
          <AboutSec />
          <Tokenimics />
          <Utility />
          <RoadMap />
          <Faq />
          <MyFooter />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
