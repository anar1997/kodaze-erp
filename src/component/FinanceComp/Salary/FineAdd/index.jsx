import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import {DatePicker} from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postFineAddAsync } from "../../../../redux/slices/Financeİnstallment/fineAddSlice";
import Error from "../../../Error";

const FineAdd = () => {
  const [startDate, setStartDate] = useState();
  const [dateErrorMessage, setDateErrorMessage] = useState(null);
  const location = useLocation();
  const { employee } = location.state;
  const navigate = useNavigate();

  const error = useSelector((state)=>state.fineAdd.error)

  // const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
  //   <input
  //     value={value}
  //     className="example-custom-input"
  //     onClick={onClick}
  //     onChange={onChange}
  //     ref={ref}
  //   />
  // ));

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      employee_id: "",
      note: "",
      date: "",
      amount: "",
    },
    onSubmit: (values) => {
      values.employee_id = employee
      employee.forEach((v, i) => {
        if (startDate === null) {
          setDateErrorMessage("Tarix mütləq daxil edilməlidir!");
        } else {
          values.date = `${startDate.$D}-${startDate.$M + 1}-${startDate.$y}`;
          values.employee_id = v.employee.id;
          dispatch(postFineAddAsync(values))
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
  }, [employee]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error}/>}
      <div className="fine-add">
        <p>Cərimə əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
        <br />
        <div className="fine-div">
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
        <div className="fine-div-2">
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
        <div className="fine-note">
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
        <div className="fine-button">
          <Link to=".." className="fine-button-1">
            Ləğv et
          </Link>
          <button type="submit" className="fine-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </form>
  );
};

export default FineAdd;
