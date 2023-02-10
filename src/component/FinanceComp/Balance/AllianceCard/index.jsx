import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllianceCard = (props) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "ocean-balance";
    navigate(path);
  };

  return (
    <div className="alliance-div" onClick={routeChange}>
      <p className="alliance-name">{props.name}</p>
      <p className="alliance-holding">HOLDING</p>
      <div className="alliance-props-div">
        <p className="alliance-company-total">
          {props.totalBalance} ₼
        </p>
      </div>
    </div>
  );
};

export default AllianceCard;
