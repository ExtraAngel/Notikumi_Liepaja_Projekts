//import "./styles.css";
//import React from "react";
//import { Card, Col, Row } from "antd";

/*function Events() {
  return (
    <>
      <Row gutter={16}>
      <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </>
  );
}*/
import React from "react";
import { Card, Col, Row  } from "antd";
import data from "./Sample.json";
import "./Events.css";
import BoxEvent from "./BoxEvent";

function Events() {
  return (
    <div className="event-card"
    style={{ display: "flex", flexDirection: "column" }}>
    <Row gutter={8}>
      <Col span={12}>
        {BoxEvent(0)}
      </Col>
      <Col span={12}>
        {BoxEvent(1)}
      </Col>
    </Row>
    <Row gutter={8}>
      <Col span={12}>
        {BoxEvent(2)}
      </Col>
      <Col span={12}>
        {BoxEvent(3)}
      </Col>
    </Row>
    </div>
  );
}

export default Events;
