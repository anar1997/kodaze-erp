import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postHoldingOperationAsync } from "../../../../redux/slices/Financeİnstallment/holdingOperationSlice";
import { getUsersAsync } from "../../../../redux/slices/humanResourcesSlices/userSlice";
import Error from "../../../Error";
import Success from "../../../Success";
import "./style.css";
import validations from "./validation";

const HoldingOperation = () => {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users.users);

  let error = useSelector((state) => state.holdingOperation.error);
  let success = useSelector((state) => state.holdingOperation.success);

  const formik = useFormik({
    initialValues: {
      personal_id: "",
      amount: "",
      note: "",
      operation: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
      dispatch(postHoldingOperationAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error} />}
      {success && <Success message={success} />}
      <div className="holding-operation">
        <div className="holding-operation-blank">
          <IoArrowBack className="holding-operation-arrow" />
          <div className="holding-operation-parametr">
            <label htmlFor="">Əməlliyyat *</label>
            <select
              name="operation"
              id=""
              className="holding-operation-select"
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
          <div className="holding-operation-parametr">
            <label>Məbləğ *</label>
            <input
              name="amount"
              type="text"
              className="holding-operation-select"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.amount && (
            <div className="error-2">{formik.errors.amount}</div>
          )}
          <div className="holding-operation-parametr">
            <label>Personal</label>
            <select
              name="personal_id"
              id=""
              className="holding-operation-select"
              value={formik.values.personal_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {users.map((v, i) => (
                <option key={"personal" + v.id} value={v.id}>
                  {v.fullname}
                </option>
              ))}
            </select>
          </div>
          <div className="holding-operation-parametr">
            <label>Qeyd</label>
            <textarea
              name=""
              id=""
              cols="27"
              rows="8"
              value={formik.values.note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <div className="holding-operation-button">
            <Link className="holding-operation-button-1" to="../">
              Ləğv et
            </Link>
            <button type="submit" className="holding-operation-button-2">Əlavə et</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default HoldingOperation;
