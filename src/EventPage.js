import "./EventPageStyle.css";
import React from "react";
import { Card } from "antd";

function EventPage() {
  return (
    <div> {/* The big parent */}
    <div className="container"> {/* Splits the top into two */}
        <div className="image-ting"> {/* Image on right side */}
            <img src="img/0.jpg" alt="Pasākuma Attēls"/>
        </div>
        <div className="text"> {/* Text on the left*/}
            <h2>Text</h2>
            <p>Description of the text.</p>
            <Card className="time-card">
            <div className="time-time"> Citi laiki: </div>
            <div className="button-group">
              <button className="btn-first">Button 1</button>
              <button className="btn-second">Button 2</button>
            </div>
            </Card>
        </div>
    </div>
    <div> {/* Text on the bottom*/}
        <div className="text-under">
            <h1>Big Title</h1>
            <p>Description of the big title.</p>
            <button className="btn-more">Learn More</button>
        </div>
    </div>
    </div>
  );
}

export default EventPage;
