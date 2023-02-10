import React from "react";
import "./style.css";
import { useState } from "react";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postAdvanceAddAsync } from "../../../../redux/slices/Financeİnstallment/advanceAddSlice";
import { useEffect } from "react";
import Error from "../../../Error";

const AdvanceAdd = () => {
  const [startDate, setStartDate] = useState();
  const location = useLocation();
  const { employee } = location.state;
  const [dateErrorMessage, setDateErrorMessage] = useState(null);
  const navigate = useNavigate();

  // const validations = yup.object().shape({
  //   date: yup.date().required("Tarix mütləq daxil edilməlidir!"),
  // });

  // const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
  //   <input
  //     value={value}
  //     className="example-custom-input"
  //     onClick={onClick}
  //     onChange={onChange}
  //     ref={ref}
  //   />
  // ));

  let error = useSelector((state)=>state.advanceAdd.error)
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      employee_id: "",
      note: "",
      date: "",
      amount: "",
    },
    // validationSchema: validations,
    onSubmit: (values) => {
      values.employee_id = employee
      employee.forEach((v, i) => {
        if (startDate === null) {
          setDateErrorMessage("Tarix mütləq daxil edilməlidir!");
        } else {
          values.date = `${startDate.$D}-${startDate.$M + 1}-${startDate.$y}`;
          values.employee_id = v.employee.id;
          console.log(v);
          dispatch(postAdvanceAddAsync(values))
            .unwrap()
            .then(() => {
              console.log('then ishledi');
              navigate("../");
            })
            .catch(()=>{
              console.log("bura dusdu");
            })
        }
      });
    },
  });

  useEffect(() => {
    console.log(employee);
  }, [employee]);
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error}/> }
      <div className="advance-add">
        <p>Avans əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
        <br />
        <div className="advance-div">
          <label htmlFor="">Məbləğ</label>
          <input
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
        </div>
        <br />
        <div className="advance-div-2">
          <label htmlFor="">Tarix*</label>
          {/* <DatePicker
            name="date"
            value={startDate}
            selected={startDate}
            onChange={(e) => console.log(`${e.$D}-${e.$M + 1}-${e.$y}`)}
            customInput={<ExampleCustomInput />}
            // dayClassName={() => "example-datepicker-day-class"}
            // popperClassName="example-datepicker-class"
            todayButton="TODAY"
            onBlur={formik.handleBlur}
          /> */}
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
        <div className="advance-note">
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
        <div className="advance-button">
          <Link to=".." className="advance-button-1">
            Imtina et
          </Link>
          <button type="submit" className="advance-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdvanceAdd;
