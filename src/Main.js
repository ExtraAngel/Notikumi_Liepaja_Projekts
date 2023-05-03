import "./styles.css";
import { Carousel } from "antd";
//import SlideTing from "./SlideTing";
import BoxMain from "./BoxMain";

//HOMEPAGE

export default function Main() {
  return (
    <>
      <div className="App">
        <div >
          <img src="img/reklama.jpg" alt="Reklama" classname="reklama"/>
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
