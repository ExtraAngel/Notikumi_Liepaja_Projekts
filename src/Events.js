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
import { Card } from "antd";

function Events() {
  return (
    <div
      className="event-card"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card className="event-card" title="Card title" bordered={true}>
        Card content
      </Card>
      <Card className="event-card" title="Card title" bordered={true}>
        Card content
      </Card>
      <Card className="event-card" title="Card title" bordered={true}>
        Card content
      </Card>
    </div>
  );
}

export default Events;
