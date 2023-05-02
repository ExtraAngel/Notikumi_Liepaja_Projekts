import React from "react";
import data from "./Sample.json";
//import { EuroCircleOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faEuroSign
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Link } from "react-router-dom";
// Box function for use on index page

function BoxMain(A) {
  //A = input, norada kurs pec kartas
  var img = "img/"+A+".jpg"; //img url
  var link = "/EventPage/"+A;
  return (
    <div className="box">

      <div className="box-image">
        <img src={img} alt="Pasakuma attels" />
      </div>

      <div className="box-content">
        <h2>{data.Pasakumi[A].Nosaukums}</h2>

        <ul className="box-ul">
          <li className="box-li">
            <FontAwesomeIcon icon={faLocationDot}/> {" "} {data.Pasakumi[A].Organizacija}
          </li>
          <li className="box-li">
            <FontAwesomeIcon icon={faClock} /> {data.Pasakumi[A].Laiks}
          </li>
          <li className="box-li">
            <FontAwesomeIcon icon={faEuroSign} /> {data.Pasakumi[A].Maksa}  
          </li>    
        </ul>
        <Link to={link} className="normal-link">
        <button>Uzzini Vairāk</button>
        </Link>
      </div>
    </div>
  );
}

export default BoxMain;
