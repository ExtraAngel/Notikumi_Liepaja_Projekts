import "./EventPageStyle.css";
import React from "react";
import { Card } from "antd";
import data from "./Sample.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,faClock,faEuroSign} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";


function EventPage() {
  let {nr} = useParams();
  var img = "../img/"+nr+".jpg";
  return (
    <div> {/* The big parent */}
    <div className="container"> {/* Splits the top into two */}
        <div className="image-ting"> {/* Image on left side */}
            <img src={img} alt="Pasākuma Attēls"  />
        </div>
        <div className="text"> {/* Text on the left*/}
            <h2>{data.Pasakumi[nr].Tips}</h2>
            <div><FontAwesomeIcon icon={faLocationDot}/> {" "} {data.Pasakumi[nr].Organizacija}</div>
            <div><FontAwesomeIcon icon={faClock} /> {data.Pasakumi[nr].Laiks}</div>
            <div><FontAwesomeIcon icon={faEuroSign} /> {data.Pasakumi[nr].Maksa} </div>
            <p>Adrese: {data.Pasakumi[nr].Adrese} {data.Pasakumi[nr].Vieta}<br></br>
            Datums:  {data.Pasakumi[nr].Datums}<br></br>
            Tālrunis: {data.Pasakumi[nr].Tālrunis} <br></br>
            E-pasts: {data.Pasakumi[nr].Epasts}
            </p>
        </div>
    </div>
    <div> {/* Text on the bottom*/}
        <div className="text-under">
            <h1>{data.Pasakumi[nr].Nosaukums}</h1>
            <p className="apraksts">{data.Pasakumi[nr].Apraksts}</p>
            <a href={data.Pasakumi[nr].Saite}><button className="btn-more">Vairāk</button></a>
        </div>
    </div>
    </div>
  );
}

export default EventPage;

/*
<Card className="time-card">
            <div className="time-time"> Citi laiki: </div>
            <div className="button-group">
              <button className="btn-first">Button 1</button>
              <button className="btn-second">Button 2</button>
            </div>
            </Card>
*/