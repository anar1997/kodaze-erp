import React from "react";
import { Col, Row } from "antd";
import {
  IoReloadOutline,
  IoNotificationsOutline,
  IoCaretDownOutline,
} from "react-icons/io5";
import man from "./man.jfif";
import "./style.css";

const PageHeader = (heading) => {
  return (
    <div className="header-flex"  style={{ background: "red" }}>
      <Row>
        <Col span={10}></Col>
        <Col span={8} className="header-name">
          {heading.name}
        </Col>
        <Col span={6}>
          <div className="header-right">
            <div className="header-reload">
              <IoReloadOutline className="IoReload" style={{ width: "2em", height: "2em" }} />
              <IoNotificationsOutline className="IoReload" style={{ width: "2em", height: "2em" }} />
            </div>
            <div className="header-dropdown">
              <img className="header-dropdown-img" src={man} alt="" />
              <p className="header-dropdown-name">Əliyev Fərid</p>
              <IoCaretDownOutline />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageHeader;
