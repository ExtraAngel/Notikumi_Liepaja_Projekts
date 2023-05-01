import "./BoxMain.css";
import React from "react";
import data from "./Sample.json";
//import { EuroCircleOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faEuroSign
} from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          {data.Pasakumi[A].Organizacija} <br></br>
          <FontAwesomeIcon icon={faClock} /> {data.Pasakumi[A].Laiks} <br></br>
          <FontAwesomeIcon icon={faEuroSign} /> {data.Pasakumi[A].Maksa}
        </p>
        <button>Uzzini Vairāk</button>
      </div>
    </div>
  );
}

export default BoxMain;
