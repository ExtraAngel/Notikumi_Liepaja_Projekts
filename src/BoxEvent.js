import React from "react";
import { Card, Col, Row  } from "antd";
import data from "./Sample.json";
import "./Events.css";

function BoxEvent(A) {
    //A = input, norada kurs pec kartas
    var img = "img/"+A+".jpg"; //img url
    return (
        <Card className="event-card" title={data.Pasakumi[A].Nosaukums} bordered={true} cover={<img alt="Pasākuma attēls" src={img} />}>
          Card content
        </Card>
    )
}

export default BoxEvent;