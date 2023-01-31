import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postPaySalaryAsync } from "../../../../redux/slices/Financeİnstallment/paySalarySlice";
import Error from "../../../Error";
import "./style.css";

const PaySalary = () => {
  const location = useLocation();
  const { employee } = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state)=>state.paySalary.error)

  const formik = useFormik({
    initialValues: {
      salary_view: "",
    },
    onSubmit: (values) => {
      let salaryViews = []
      employee.map((v, i)=>{
        salaryViews.push(v.id)
      })
      values.salary_view = salaryViews;
      dispatch(postPaySalaryAsync(values))
        .unwrap()
        .then(() => {
          navigate("../");
        });
    },
  });
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      {error && <Error message={error}/>}
      <div className="pay-salary">
        <div className="pay-p">
          <p>Seçilmiş şəxs və ya şəxslərin</p>
          <p>Əməkhaqqıları ödəmək istədiyinizə əminsiniz?</p>
        </div>
        <br />
        <div className="pay-div">
          <Link to=".." className="pay-button-1">
            Xeyr
          </Link>
          <button type="submit" className="pay-button-2">
            Bəli
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaySalary;
