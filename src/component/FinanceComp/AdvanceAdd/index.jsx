import React from "react";
import "./style.css";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const FineAdd = () => {
  const [startDate, setStartDate] = useState();
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    />
  ));
  return (
    <div className="advance-add">
      <p>Avans əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
      <br />
      <div className="advance-div">
        <label htmlFor="">Məbləğ</label>
        <input type="text" />
      </div>
      <br />
      <div className="advance-div-2">
        <label htmlFor="">Tarix*</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
          dayClassName={() => "example-datepicker-day-class"}
          popperClassName="example-datepicker-class"
          todayButton="TODAY"
        />
        <br />
      </div>
      <div className="advance-note">
        <label htmlFor="">Qeyd</label>
        <textarea id="" cols="30" rows="10"></textarea>
      </div>
      <br />
      <div className="advance-button">
        <Link to=".." className="advance-button-1">
          Imtina et
        </Link>
        <Link type="submit" className="advance-button-2">
          Əlavə et
        </Link>
      </div>
    </div>
  );
};

export default FineAdd;
