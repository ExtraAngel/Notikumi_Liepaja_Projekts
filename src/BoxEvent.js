import React from "react";
import { Card, Col, Row  } from "antd";
import data from "./Sample.json";
import "./Events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,faClock,faEuroSign} from "@fortawesome/free-solid-svg-icons";

function BoxEvent(A) {
    //A = input, norada kurs pec kartas
    var img = "img/"+A+".jpg"; //img url
    return (
        <Card className="event-card" title={data.Pasakumi[A].Nosaukums} bordered={true} 
        cover={<img alt="Pasākuma attēls" src={img}/>}>
          <FontAwesomeIcon icon={faLocationDot}/> {" "} {data.Pasakumi[A].Organizacija} {"  "} 
          <FontAwesomeIcon icon={faClock} /> {" "} {data.Pasakumi[A].Laiks} {"  "} 
          <FontAwesomeIcon icon={faEuroSign} /> {" "} {data.Pasakumi[A].Maksa} {"  "}
          <button className="event-button">Uzzini Vairāk</button>
        </Card>
    )
}

export default BoxEvent;