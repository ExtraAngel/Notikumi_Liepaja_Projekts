import "./styles.css";
import { Carousel } from "antd";
import SlideTing from "./SlideTing";
//import BoxTing from "./BoxTing";
import BoxMain from "./BoxMain";
import NavBar from "./NavBar";

export default function App() {
  return (
    <>
      <div className="App">
        {/*<NavBar /> */}
        <NavBar />
        <div>Notikumi Liepājā</div>
        <div>
          <button>Aktuālais</button>
          <button>Saraksts</button>
          <button>Par Mums</button>
        </div>
        <div>
          <SlideTing />
        </div>
        <div>
          {BoxMain(0)}
          {BoxMain(1)}
          {BoxMain(2)}
          {BoxMain(3)}
          {BoxMain(4)}
          {/* <BoxTing /> */}
        </div>
      </div>
    </>
  );
}
