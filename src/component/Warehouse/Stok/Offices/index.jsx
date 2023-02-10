import React from "react";
import { IoAddCircleOutline, IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";

const OfficesStok = () => {
  return (
    <div className="offices-stok">
      <div className="uti-header">
        <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <p>Anbar transfer əməliyyatı</p>
      </div>
      <br />
      <div className="offices-stok-parametr-2">
        <label htmlFor="">Şirkət</label>
        <select name="" id="" className="offices-stok-select-2"></select>
      </div>
      <div className="offices-stok-parametr-2">
        <label htmlFor="">Göndərən ofis</label>
        <select name="" id="" className="offices-stok-select-2"></select>
      </div>
      <div className="offices-stok-parametr-2">
        <label htmlFor="">Qəbul edən ofis</label>
        <select name="" id="" className="offices-stok-select-2"></select>
      </div>
      <div className="utilization-div">
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="offices-stok-parametr">
            <label htmlFor="">Məhsul</label>          
          <div className="stok-number-add-icon">
            <select name="" id="" className="offices-stok-select-2">
              <option value={null}>Məhsul</option>
            </select>
            <input className="stok-number-input" type="number" />
            <IoAddCircleOutline className="stok-add-icon" />
          </div>
        </div>
        <div className="stok-note-div">
            <label htmlFor="">Qeyd</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <br />
        <div className="utilization-button">
          <Link className="utilization-button-1" to="../">
            Ləğv et
          </Link>
          <button type="submit" className="utilization-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficesStok;
