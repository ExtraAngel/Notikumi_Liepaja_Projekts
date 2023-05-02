import React from "react";
import { Carousel } from "antd";

export default function SlideTing() {
  /*const contentStyle = {
    margin: 0,
    height: "200px",
    color: "#fff",
    lineHeight: "340px",
    textAlign: "center",
    background: "#364d79",
    verticalAlign: "center"
  };*/

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div>
        <Carousel autoplay afterChange={onChange} className="ant-carousel">
          <div>
            <h3>
              <iframe
                title="Joke"
                frameborder="0"
                src="https://th.bing.com/th/id/OIP.Gxhn2g67-uC_X7Jg0SSSGwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7"
                allowFullScreen
                className="slick-slide-img"
              ></iframe>
              <div>1</div>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                title="Joke"
                frameborder="0"
                src="https://th.bing.com/th/id/OIP.Gxhn2g67-uC_X7Jg0SSSGwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7"
                allowFullScreen
                className="slick-slide-img"
              ></iframe>
              <div>2</div>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                title="Joke"
                frameborder="0"
                src="https://th.bing.com/th/id/OIP.Gxhn2g67-uC_X7Jg0SSSGwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7"
                allowFullScreen
                className="slick-slide-img"
              ></iframe>
              <div>3</div>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                title="Joke"
                frameborder="0"
                src="https://th.bing.com/th/id/OIP.Gxhn2g67-uC_X7Jg0SSSGwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7"
                allowFullScreen
                className="slick-slide-img"
              ></iframe>
              <div>4</div>
            </h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}
