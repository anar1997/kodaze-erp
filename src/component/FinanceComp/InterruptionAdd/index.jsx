import React from "react";
import "./style.css";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const InterruptionAdd = () => {
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
    <div className="interruption-add">
      <p>Kəsinti əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
      <br />
      <div className="interruption-div">
        <label htmlFor="">Məbləğ</label>
        <input type="text" />
      </div>
      <br />
      <div className="interruption-div-2">
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
      <div className="interruption-note">
        <label htmlFor="">Qeyd</label>
        <textarea id="" cols="30" rows="10"></textarea>
      </div>
      <br />
      <div className="interruption-button">
        <Link to=".." className="interruption-button-1">
          Ləğv et
        </Link>
        <Link type="submit" className="interruption-button-2">
          Əlavə et
        </Link>
      </div>
    </div>
  );
};

export default InterruptionAdd;