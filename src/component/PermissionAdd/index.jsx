import React from "react";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";
import { DatePicker, Calendar } from "react-multi-date-picker";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { postPermissionAsync } from "../../redux/slices/humanResourcesSlices/permissionSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PermissionAdd = () => {
  const location = useLocation();
  const { from } = location.state;

  const [date, setDate] = useState();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      employee_id: "",
      day_off_date: "",
      is_paid: false,
    },
    onSubmit: (values) => {
      values.employee_id = from;
      let dateList = [];
      date.map((v) => {
        let a = `${v.day}-${v.month.number}-${v.year}`;
        dateList.push(a);
      });
      let dateString = dateList.join(",");
      values.day_off_date = dateString;
      dispatch(postPermissionAsync(values));
    },
  });
  useEffect(() => {
    console.log(from);
  }, []);
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="permission-add">
          <IoArrowBack className="permission-arrow" />
          <h2 className="permission-h2">İcazə əlavə et</h2>
          <div className="app">
            <div>
              <Calendar onChange={setDate} value={date} multiple={true} />
            </div>
          </div>
          <div className="permission-checking">
            <input
              type="checkbox"
              id="is_paid"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <h4>Ödənişli</h4>
          </div>
          <div className="permission-delete">
            <button className="permission-button">Təmizlə</button>
            <button type="submit" className="permission-button-2">Əlavə et</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PermissionAdd;
