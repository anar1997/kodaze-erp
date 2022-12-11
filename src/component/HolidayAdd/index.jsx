import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Calendar from "react-calendar";

const HolidayAdd = () => {
    const [date, setDate] = useState(new Date());


  return (
    <form action="">
      <div className="holiday-add">
        <IoArrowBack className="holiday-arrow" />
        <h2 className="holiday-h2">Tətil əlavə et</h2>

        {/* calendar  */}
        <div className="app">
          <div>
            <Calendar onChange={setDate} value={date} selectRange={true} />
          </div>
          {date.length > 0 ? (
            <p>
              <span>Start:</span> {date[0].toDateString()}
              &nbsp; to &nbsp;
              <span>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Default selected date:</span> {date.toDateString()}
            </p>
          )}
        </div>
        {/* calendar  */}
        <div className="holiday-checking">
          <input type="checkbox" />
          <h4>Holding</h4>
        </div>
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Şirkət</label>
          <select name="company" className="holiday-uni-select"></select>
        </div>
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Ofis</label>
          <select name="office" className="holiday-uni-select"></select>
        </div>
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Növbətçi</label>
          <select name="office" className="holiday-uni-select"></select>
        </div>
        <div className="holiday-delete">
          <button className="holiday-button">Təmizlə</button>
          <button className="holiday-button-2">Əlavə et</button>
        </div>
      </div>
    </form>
  );
};

export default HolidayAdd;
