import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CashBoxCard = (props) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "ocean-balance";
    navigate(path);
  };

  return (
    <div className="cash-div" onClick={routeChange}>
      <p className="props-name">{props.name}</p>
      <div className="props-div"> 
        {/* <p>Şirkət kassası:</p> */}
        <p className="props-company-balance">Şirkət kassası:  {props.companyBalance} ₼</p>
      </div>
      <div className="props-div">
        {/* <p>Bütün kassalar:</p> */}
        <p className="props-company-total">Bütün kassalar: {props.totalBalance} ₼</p>
      </div>
    </div>
  );
};

export default CashBoxCard;
