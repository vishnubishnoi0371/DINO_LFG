import "./App.css";
import About_Sec from "./Components/About_Sec";
import Backtotop from "./Components/Backtotop";
import Faq from "./Components/Faq";
import My_Footer from "./Components/My_Footer";
import My_Header from "./Components/My_Header";
import Preload from "./Components/Preload";
import RoadMap from "./Components/RoadMap";
import Tokenimics from "./Components/Tokenimics";
import Utility from "./Components/Utility";

function App() {
  return (
    <div className="App">
      <My_Header />
      <About_Sec />
      <Tokenimics />
      <Utility />
      <RoadMap />
      <Faq />
      <My_Footer />
      <Backtotop />
      <Preload />
    </div>
  );
}

export default App;
