import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postCompanyOfficeAsync } from "../../../../redux/slices/Financeİnstallment/Transfer/companyOfficeSlice";
import { getCompanyAsync } from "../../../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../../../redux/slices/humanResourcesSlices/officeSlice";
import Error from "../../../Error";
import "./style.css";
import validations from "./validation";

const TransferedOffice = () => {
  const dispatch = useDispatch();
  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);

  let error = useSelector((state) => state.companyOffice.error);

  const formik = useFormik({
    initialValues: {
      company_id: "",
      sending_office_id: "",
      receiving_office_id: "",
      transfer_amount: "",
      transfer_note: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
      dispatch(postCompanyOfficeAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
  }, [dispatch]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      <div className="transfer-company">
      <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <div className="transfer-blank">
          <div className="transfer-company-parametr">
            <label htmlFor="">Şirkət *</label>
            <select
              name="company_id"
              id=""
              className="transfer-company-select"
              value={formik.values.company_id}
              onChange={formik.handleChange}
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
          {formik.errors.company_id && (
            <div className="error-2">{formik.errors.company_id}</div>
          )}
          <div className="transfer-company-parametr">
            <label htmlFor="">Göndərən ofis</label>
            <select
              name="sending_office_id"
              id=""
              className="transfer-company-select"
              value={formik.values.sending_office_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {office.map((v, i) => (
                <option key={"sender" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="transfer-company-parametr">
            <label>Qəbul edən ofis</label>
            <select
              name="receiving_office_id"
              id=""
              className="transfer-company-select"
              value={formik.values.receiving_office_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {office.map((v, i) => (
                <option key={"receiver" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="transfer-company-parametr">
            <label>Məbləğ *</label>
            <input
              name="transfer_amount"
              type="text"
              className="transfer-company-select"
              value={formik.values.transfer_amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.transfer_amount && (
            <div className="error-2">{formik.errors.transfer_amount}</div>
          )}
          <div className="transfer-company-parametr">
            <label>Qeyd</label>
            <textarea
              name="transfer_note"
              id=""
              cols="24"
              rows="7"
              value={formik.values.transfer_note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <div className="transfer-button">
            <Link className="transfer-button-1" to="../">
              Ləğv et
            </Link>
            <button type="submit" className="transfer-button-2">
              Əlavə et
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TransferedOffice;
