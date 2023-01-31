import React, { useEffect } from "react";
import "./style.css";
import { forwardRef, useState } from "react";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postInterruptionAddAsync } from "../../../../redux/slices/Financeİnstallment/interruptionAddSlice";
import Error from "../../../Error";

const InterruptionAdd = () => {
  const [startDate, setStartDate] = useState();
  const [dateErrorMessage, setDateErrorMessage] = useState(null);
  const location = useLocation();
  const { employee } = location.state;
  const navigate = useNavigate();

  const error = useSelector((state) => state.interruptionAdd.error);

  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    />
  ));

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      employee_id: "",
      note: "",
      date: "",
      amount: "",
    },
    onSubmit: (values) => {
      employee.map((v, i) => {
        if (startDate === null) {
          setDateErrorMessage("Tarix mütləq daxil edilməlidir!");
        } else {
          values.date = `${startDate.$D}-${startDate.$M + 1}-${startDate.$y}`;
          values.employee_id = v.employee.id;
          dispatch(postInterruptionAddAsync(values))
            .unwrap()
            .then(() => {
              console.log("then ishledi");
              navigate("../");
            });
        }
      });
    },
  });

  useEffect(() => {
    console.log(employee);
  }, []);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      <div className="interruption-add">
        <p>Kəsinti əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
        <br />
        <div className="interruption-div">
          <label htmlFor="">Məbləğ</label>
          <input
            name="amount"
            type="text"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <br />
        <div className="interruption-div-2">
          <label htmlFor="">Tarix*</label>
          <DatePicker
            name="date"
            value={startDate}
            className="advance-date"
            onChange={(e) => setStartDate(e)}
            onBlur={formik.handleBlur}
            format="DD-MM-YYYY"
          />
          <br />
        </div>
        {dateErrorMessage && <div className="error-2">{dateErrorMessage}</div>}
        <div className="interruption-note">
          <label htmlFor="">Qeyd</label>
          <textarea
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <div className="interruption-button">
          <Link to=".." className="interruption-button-1">
            Ləğv et
          </Link>
          <button type="submit" className="interruption-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </form>
  );
};

export default InterruptionAdd;
