import React from "react";
import "./styles.css";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { TextArea } = Input;

function AboutUS() {
  return (
    <div className="container-about">
      <div className="row">
        <div>
          <h2 className="contact">Sazinies ar mums</h2>
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
        <h2>Visi kultūras notikumi Liepājā - vienviet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div>E-pasts: info@notikumiliepaja.lv</div>
        <div>Telefons: 5555555555</div>
        <div>Address: Ausekļa iela 9, Liepāja, LV-3401</div>
      </div>
    </div>
  );
}

export default AboutUS;
