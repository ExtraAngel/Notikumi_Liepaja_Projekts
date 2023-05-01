import React from "react";
import data from "./Sample.json";

const BoxTing = () => {
  return (
    <div className="box" bordered={true}>
      <div className="box-image">
        <img src="https://example.com/image.jpg" alt="Example Image" />
      </div>
      <div className="box-content">
        <h2>{data.Pasakumi[0].Nosaukums}</h2>
        <p>
          Vieta: {data.Pasakumi[0].Organizacija} <br></br>
          Laiks: {data.Pasakumi[0].Laiks} <br></br>
          Maksa: {data.Pasakumi[0].Maksa}
        </p>
        <button>Uzzini Vairāk</button>
      </div>
      <div className="box-image">
        <img src="https://example.com/image.jpg" alt="Example Image" />
      </div>
      <div className="box-content" bordered={true}>
        <h2>Heading</h2>
        <p>Text goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="box-image">
        <img src="https://example.com/image.jpg" alt="Example Image" />
      </div>
      <div className="box-content" bordered={true}>
        <h2>Heading</h2>
        <p>Text goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="box-image">
        <img src="https://example.com/image.jpg" alt="Example Image" />
      </div>
      <div className="box-content" bordered={true}>
        <h2>Heading</h2>
        <p>Text goes here.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default BoxTing;
