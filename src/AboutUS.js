import React from "react";
import "./styles.css";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { TextArea } = Input;

function AboutUS() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 className="contact">Contact Us</h2>
          <form>
            <div className="form-group">
              <Input
                placeholder="Vārds"
                className="name"
                prefix={<UserOutlined />}
              />
            </div>
            <div className="form-group">
              <Input className="e-mail" placeholder="E-pasts" />
            </div>
            <div className="form-group">
              <TextArea rows={4} className="text-area" placeholder="Teksts" />
            </div>
            <button type="submit" className="btn-btn-primary">
              Nosūtīt
            </button>
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <h2>About Us</h2>
        <p>..........................</p>
        <p>................................</p>
        <p>............................</p>
        <div>Email: formoo@website.com</div>
        <div>Phone: 5555555555</div>
        <div>Address: Alojas iela, Houston, California USA</div>
      </div>
    </div>
  );
}

export default AboutUS;
