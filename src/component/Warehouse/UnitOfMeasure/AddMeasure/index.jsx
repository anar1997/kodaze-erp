import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";

const AddMeasure = () => {
  return (
    <div className="add-measure">
      <Link to={'..'}>
        <IoArrowBack className="transfer-arrow" />
      </Link>
      <p>Ölçü vahidi daxil edin</p>
      <br />
      <div className="add-measure-parametr">
        <label htmlFor="">Ölçü vahidi</label>
        <input className="add-measure-select" type="text" />
      </div>
      <div className="add-measure-button">
        <Link className="add-measure-button-1" to="../">
          Ləğv et
        </Link>
        <button type="submit" className="add-measure-button-2">
          Əlavə et
        </button>
      </div>
    </div>
  );
};

export default AddMeasure;
