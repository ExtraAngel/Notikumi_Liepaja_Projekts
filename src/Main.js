import "./styles.css";
import { Carousel } from "antd";
import SlideTing from "./SlideTing";
//import BoxTing from "./BoxTing";
import BoxMain from "./BoxMain";

//HOMEPAGE

export default function Main() {
  return (
    <>
      <div className="App">
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
