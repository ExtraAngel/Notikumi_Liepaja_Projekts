import "./styles.css";
import { Carousel } from "antd";
//import SlideTing from "./SlideTing";
import BoxMain from "./BoxMain";

//HOMEPAGE

export default function Main() {
  return (
    <>
      <div className="App">
        <div className="reklama">
          <img src="img/ReklamaPlus.jpg" alt="Reklama"  height="250"/>
        </div>
        <div>
          {BoxMain(0)}
          {BoxMain(1)}
          {BoxMain(2)}
          {BoxMain(3)}
          {BoxMain(4)}
        </div>
      </div>
    </>
  );
}
