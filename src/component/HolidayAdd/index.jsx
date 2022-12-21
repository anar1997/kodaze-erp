import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";
import { useState } from "react";
import { DatePicker, Calendar } from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postHolidayAsync } from "../../redux/slices/humanResourcesSlices/holidaySlice";
import { getUsersAsync } from "../../redux/slices/humanResourcesSlices/userSlice";
import { getCompanyAsync } from "../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../redux/slices/humanResourcesSlices/officeSlice";
import Select from "react-select";
import Error from "../Error";
import Option from "./Option";
import ReactSelect from "react-select";
import * as yup from "yup";


const HolidayAdd = () => {
  const [date, setDate] = useState();
  let [selectedOption, setSelectedOption] = useState([]);
  let [isHolding, setIsHolding] = useState(false);

  const validations = yup.object().shape({
    holiday_date: yup.date().required("Tarix mütləq daxil edilməlidir!"),
    holding: yup.boolean(),
    office_id: yup.number().when('holding', (holding, schema)=>{
      return holding==true ? schema : schema.required("bu xana boş ola bilməz")
    }),
    company_id: yup.number().when('holding', (holding, schema)=>{
      return holding==true ? schema : schema.required("bu xana boş ola bilməz")
    }),
    // company_id: holding ? (yup.number()) : (yup.number().required("bu xana bos ola bilmez")),
  })

  const handleChange = (e) => {
    e.map((v, i) => {
      console.log(v.id);
      setSelectedOption([...selectedOption, v.id]);
      console.log(selectedOption);
    });
  };

  const dispatch = useDispatch();

  let personOnDuty = useSelector((state) => state.users.users);
  let office = useSelector((state) => state.office.data);
  let company = useSelector((state) => state.company.data);
  let error = useSelector((state) => state.holiday.error);
  
  const formik = useFormik({
    initialValues: {
      person_on_duty_id: "",
      office_id: undefined,
      company_id: undefined,
      holding: false,
      holiday_date: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
      values.person_on_duty_id = selectedOption;
      console.log(date);
      values.office_id = parseInt(values.office_id)
      values.company_id = parseInt(values.company_id)
      let dateList = []
      date.map((v)=>{
        let a = `${v.day}-${v.month.number}-${v.year}`
        dateList.push(a);
      })
      let dateString = dateList.join(",")
      values.holiday_date = dateString
      dispatch(postHolidayAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
  }, [dispatch]);

  
  return (
    <form action="" onSubmit={formik.handleSubmit}>
       {error && <Error message={error}/>}
      <div className="holiday-add">
        <IoArrowBack className="holiday-arrow" />
        <h2 className="holiday-h2">Tətil əlavə et</h2>

        <div className="app">
          <div>
            <Calendar onChange={setDate} value={date} multiple={true} />
          </div>
        </div>
          {formik.errors.holiday_date && (
              <div className="error-1">{formik.errors.holiday_date}</div>
            )}
        <div className="holiday-checking">
          <input
            type="checkbox"
            id="holding"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <h4>Holding</h4>
        </div>
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Şirkət</label>
          <select
            disabled={formik.values.holding ? (true):(false)}  
            name="company_id"
            value={formik.values.company_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="holiday-uni-select"
          >
            <option value={null}></option>
            {company.map((v, i) => (
              <option key={"company" + v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
          {formik.errors.company_id && (
              <div className="error-2">{formik.errors.company_id}</div>
            )}
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Ofis</label>
          <select
            disabled = {formik.values.holding ? (true) : (false)}
            name="office_id"
            value={formik.values.office_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="holiday-uni-select"
          >
            <option value={null}></option>
            {office.map((v, i) => (
              <option key={"office" + v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
          {formik.errors.office_id && (
              <div className="error-2">{formik.errors.office_id}</div>
            )}
        <div className="holiday-proqram-parametr">
          <label htmlFor="">Növbətçi</label>
          
          <ReactSelect
           className="holiday-uni-select"
          options={personOnDuty}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={(e) => handleChange(e)}
          allowSelectAll={true}
          values={selectedOption}
          getOptionLabel={(option) => option.fullname}
            getOptionValue={(option) => option.id}
        />
        </div>
        <div className="holiday-delete">
          <button className="holiday-button">Təmizlə</button>
          <button type="submit" className="holiday-button-2">Əlavə et</button>
        </div>
      </div>
    </form>
  );
};

export default HolidayAdd;
