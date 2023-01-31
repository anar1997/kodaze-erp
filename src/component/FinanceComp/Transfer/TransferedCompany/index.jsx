import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postHoldingCompanyAsync } from "../../../../redux/slices/Financeİnstallment/Transfer/holdingCompanySlice";
import { getCompanyAsync } from "../../../../redux/slices/humanResourcesSlices/companySlice";
import Error from "../../../Error";
import "./style.css";
import validations from "./validation";

const TransferedCompany = () => {
  const [amountErrorMessage, setAmountErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // const location = useLocation();
  // const {employee} = location.state;
  const navigate = useNavigate();
  let company = useSelector((state) => state.company.data);

  let error = useSelector((state) => state.holdingCompany.error);

  const formik = useFormik({
    initialValues: {
      sending_company_id: "",
      receiving_company_id: "",
      transfer_amount: "",
      transfer_note: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
        dispatch(postHoldingCompanyAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getCompanyAsync());
  }, [dispatch]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      <div className="transfer-company">
        <IoArrowBack className="transfer-arrow" />
        <div className="transfer-blank">
          <div className="transfer-company-parametr">
            <label htmlFor="">Göndərən şirkət</label>
            <select
              name="sending_company_id"
              className="transfer-company-select"
              value={formik.values.sending_company_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {company.map((v, i) => (
                <option key={"sender" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="transfer-company-parametr">
            <label>Qəbul edən şirkət</label>
            <select
              name="receiving_company_id"
              className="transfer-company-select"
              value={formik.values.receiving_company_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {company.map((v, i) => (
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
              name="note"
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

export default TransferedCompany;
