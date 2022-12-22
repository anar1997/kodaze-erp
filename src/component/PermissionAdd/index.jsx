import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";
import { Calendar } from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postPermissionAsync } from "../../redux/slices/humanResourcesSlices/permissionSlice";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { useRef } from "react";
import Success from "../Success";
import Error from "../Error";


const PermissionAdd = () => {
  const location = useLocation();
  const { from } = location.state;

  let error = useSelector((state)=>state.permission.error)
  let successMessage = useSelector((state)=>state.permission.successMessage)

  const isPaidRef = useRef(null);

  const validations = yup.object().shape({
    employee_id: yup.array(),
    day_off_date: yup.array().required("Tarix mütləq daxil edilməlidir!"),
    is_paid: yup.boolean()
  })

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      employee_id: [],
      day_off_date: "",
      is_paid: false,
    },
    validationSchema: validations,
    onSubmit: (values) => {
      values.employee_id = from;
      let dateList = [];
      values.day_off_date.forEach((v) => {
        let a = `${v.day}-${v.month.number}-${v.year}`;
        dateList.push(a);
      });
      let dateString = dateList.join(",");
      values.day_off_date = dateString;
      dispatch(postPermissionAsync(values));
      formik.resetForm();
      isPaidRef.current.checked = false;
    },
  });
 
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      {successMessage && <Success message={successMessage} />}
         
        <div className="permission-add">
          <IoArrowBack className="permission-arrow" />
          <h2 className="permission-h2">İcazə əlavə et</h2>
          <div className="app">
            <div>
              <Calendar onChange={(e) => formik.setFieldValue("day_off_date", e)} value={formik.values.day_off_date} onBlur={formik.handleBlur} multiple={true} />
            </div>
            {formik.errors.day_off_date &&(
              <div className="error-1">{formik.errors.day_off_date}</div>
            )}
          </div>
          <div className="permission-checking">
            <input
              type="checkbox"
              id="is_paid"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={isPaidRef}
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
