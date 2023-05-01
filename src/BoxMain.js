import React from "react";
import data from "./Sample.json";

// Box function for use on index page

function BoxMain(A) {
  //A = input, norada kurs pec kartas
  return (
    <div className="box">
      <div className="box-image">
        <img src="./img/1.jpg" alt="Pasakuma attels" />
      </div>
      <div className="box-content">
        <h2>{data.Pasakumi[A].Nosaukums}</h2>
        <p>
          Vieta: {data.Pasakumi[A].Organizacija} <br></br>
          Laiks: {data.Pasakumi[A].Laiks} <br></br>
          Maksa: {data.Pasakumi[A].Maksa}
        </p>
        <button>Uzzini Vairāk</button>
      </div>
    </div>
  );
}

export default BoxMain;
