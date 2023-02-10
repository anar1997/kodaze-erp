import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postCompanyOperationAsync } from "../../../../redux/slices/Financeİnstallment/companyOperationSlice";
import { getCompanyAsync } from "../../../../redux/slices/humanResourcesSlices/companySlice";
import { filterOfficesAsync } from "../../../../redux/slices/humanResourcesSlices/officeSlice";
import { getUsersAsync } from "../../../../redux/slices/humanResourcesSlices/userSlice";
import Error from "../../../Error";
import Success from "../../../Success";
import "./style.css";
import validations from "./validation";


const CompanyOperation = () => {
  const dispatch = useDispatch();
  let [selectedCompany, setSelectedCompany] = useState();
  let [changedCompany, setChangedCompany] = useState(false);
  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let users = useSelector((state) => state.users.users)
  // let officeRef = useRef();
  let [errorCompany, setErrorCompany] = useState(null);

  let error = useSelector((state) => state.companyOperation.error);
  let success = useSelector((state) => state.companyOperation.success)

  const selectCompany=(e)=>{
    console.log(e);
    setSelectedCompany(e.target.value)
    if(e.target.value===""){
      setChangedCompany(false)
    }else{
    setChangedCompany(true)
    const values = {
      company: e.target.value,
      name: "",
      employee_count: "",
    }
    dispatch(filterOfficesAsync(values));
    }
  }

  const formik = useFormik({
    initialValues: {
      company_id: "",
      office_id: "",
      amount: "",
      note: "",
      operation: "",
      personal_id: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
      if (selectCompany===null){
        setErrorCompany("Şirkət mütləq daxil edilməlidir!")
      }
      values.company_id = selectedCompany
      dispatch(postCompanyOperationAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getCompanyAsync());
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      {success && <Success message={success}/>}
      <div className="company-operation">
        <div className="company-operation-blank">
          <div className="company-operation-parametr">
            <label htmlFor="">Şirkət *</label>
            <select
              name="company_id"
              id=""
              className="company-operation-select"
              value={selectedCompany}
              onChange={(e)=>selectCompany(e)}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {company.map((v, i) => (
                <option key={"company" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          {errorCompany && (
            <div className="error-2">{errorCompany}</div>
          )}
          <div className="company-operation-parametr">
            <label htmlFor="">Ofis</label>
            <select
              name="office_id"
              id=""
              className="company-operation-select"
              value={formik.values.office_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled = {changedCompany ? false : true}
            >
              <option value={null}></option>
              {office.map((v, i) => (
                <option key={"office" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="company-operation-parametr">
            <label htmlFor="">Əməlliyyat *</label>
            <select
              name="operation"
              id=""
              className="company-operation-select"
              value={formik.values.operation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              <option key={"operation-1"} value="MƏDAXİL">
                MƏDAXİL
              </option>
              <option key={"operation-2"} value="MƏXARİC">
                MƏXARİC
              </option>
            </select>
          </div>
          {formik.errors.operation && (
            <div className="error-2">{formik.errors.operation}</div>
          )}
          <div className="company-operation-parametr">
            <label>Məbləğ *</label>
            <input
              name="amount"
              type="text"
              className="company-operation-select"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.amount && (
            <div className="error-2">{formik.errors.amount}</div>
          )}
          <div className="company-operation-parametr">
            <label>Personal</label>
            <select
              name="personal_id"
              id=""
              className="company-operation-select"
              value={formik.values.personal_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {users.map((v, i)=>(
                <option key={"personal" + v.id} value={v.id}>
                  {v.fullname}
                </option>
              ))}
            </select>
          </div>
          <div className="company-operation-parametr">
            <label>Qeyd</label>
            <textarea
              name="note"
              id=""
              cols="27"
              rows="10"
              value={formik.values.note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <div className="company-operation-button">
            <Link className="company-operation-button-1" to="../">
              Ləğv et
            </Link>
            <button type="submit" className="company-operation-button-2">
              Əlavə et
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CompanyOperation;
