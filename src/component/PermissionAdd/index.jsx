import React from "react";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { IoArrowBack } from "react-icons/io5";
import './style.css'


const PermissionAdd = () => {
  const [values, setValues] = useState([]);   

  return (
    <div>
      <form action="">
        <div className="permission-add">
          <IoArrowBack className="permission-arrow" />
          <h2 className="permission-h2">Tətil əlavə et</h2>
          <DatePicker multiple value={values} onChange={setValues} />
          <div className="permission-checking">
            <input type="checkbox" />
            <h4>Ödənişli</h4>
          </div>
          <div className="permission-delete">
            <button className="permission-button">Təmizlə</button>
            <button className="permission-button-2">Əlavə et</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PermissionAdd;
