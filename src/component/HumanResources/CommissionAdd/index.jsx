import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCommissionAsync } from "../../../redux/slices/humanResourcesSlices/commissionSlice";
import { getMonthRangeAsync } from "../../../redux/slices/humanResourcesSlices/monthRangeSlice";
import "./style.css";

const CommissionAdd = () => {
  const dispatch = useDispatch();

  const [monthList1, setMonthList1] = useState("");
  const [monthList2, setMonthList2] = useState("");
  const [monthList3, setMonthList3] = useState("");
  const [monthList4, setMonthList4] = useState("");

  const [monthSalaryList1, setMonthSalaryList1] = useState("");
  const [monthSalaryList2, setMonthSalaryList2] = useState("");
  const [monthSalaryList3, setMonthSalaryList3] = useState("");
  const [monthSalaryList4, setMonthSalaryList4] = useState("");

  // let monthList = ["", "", "", ""];
  // let monthSalaryList = ["", "", "", ""];

  function handleMonthId(e, i) {
    console.log(e.target.value);
    console.log(i);
    setMonthList1([...monthList1, e.target.value, i])
  }

  function handleMonthSalary(e, i) {
    console.log(e.target.value);
    console.log(i);
    setMonthSalaryList1([...monthSalaryList1, e.target.value, i])
  }

  let monthRange = useSelector((state) => state.monthRange.data);

  const formik = useFormik({
    initialValues: {
      commission_name: "",
      for_office: "",
      cash: "",
      for_team: "",
      month_ranges: "",
      sale_ranges: "",
      creditor_per_cent: "",
    },
    onSubmit: (values) => {
      let monthRangeList = [];
      // if (mothId1 != "") {
      //   let a = `${v}-${monthSalaryList[i]}`;
      //   monthRangeList.push(a)
      // }
      // // let filteredMonthList = monthList.filter(month=>month!="");
      // console.log(monthList);
      // filteredMonthList.forEach((v,i)=>{
      //   let a = `${v}-${monthSalaryList[i]}`;
      //   monthRangeList.push(a);
      // });
      // console.log(filteredMonthList);
      // let monthRangeStr = monthRangeList.join(",");
      // console.log(monthRangeStr);
      // values.month_ranges = monthRangeStr;
      // console.log(values.month_ranges);
      dispatch(postCommissionAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getMonthRangeAsync());
  }, [dispatch]);

  return (
    <form action="" onSubmit={formik.handleSubmit}>
    <div className="commission-add">
      {/* <h4 className='commission-type'>Komissiya növü</h4>  kicik dizayn ucun  */}
      <h2 className="commission-type">Komissiya növü</h2>
      <br />
      <input
        className="commission-add-name"
        value={formik.values.commission_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        placeholder="Komissiya adı"
      />
      <div className="for-office">
        <label htmlFor="">Ofisə görə</label>
        <input
          className="for-office-input"
          value={formik.values.for_office}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
        />
      </div>
      <div className="for-office-2">
        <label htmlFor="">Nəğd</label>
        <input
          className="for-office-input"
          value={formik.values.cash}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
        />
      </div>
      <br />
      <h3 className="credit-range-h5">Kredit aralığı</h3>

      <div className="credit-range">
        <select
          onChange={(e) => handleMonthId(e, 0)}
          className="commission-add-select"
          name=""
          id=""
        >
          {monthRange.map((v, i) => (
            <option key={"month-range-option1" + v.id + i} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => handleMonthSalary(e, 0)}
          className="for-office-input"
          type="text"
        />
      </div>
      <div className="credit-range">
        <select
          onChange={(e) => handleMonthId(e, 1)}
          className="commission-add-select"
          name=""
          id=""
        >
          {monthRange.map((v, i) => (
            <option key={"month-range-option2" + v.id + i} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => handleMonthSalary(e, 1)}
          className="for-office-input"
          type="text"
        />
      </div>
      <div className="credit-range">
        <select
          onChange={(e) => handleMonthId(e, 2)}
          className="commission-add-select"
          name=""
          id=""
        >
          {monthRange.map((v, i) => (
            <option key={"month-range-option3" + v.id} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => handleMonthSalary(e, 2)}
          className="for-office-input"
          type="text"
        />
      </div>
      <div className="credit-range">
        <select
          onChange={(e) => handleMonthId(e, 3)}
          className="commission-add-select"
          name=""
          id=""
        >
          {monthRange.map((v, i) => (
            <option key={"month-range-option4" + v.id + i} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => handleMonthSalary(e, 3)}
          className="for-office-input"
          type="text"
        />
      </div>
      <br />
      <h3 className="credit-range-2-h5">Satış sayı aralığı</h3>
      <div className="credit-range-2">
        <select className="commission-add-select" name="" id=""></select>
        <input className="for-office-input" placeholder="300" type="text" />
        <select className="commission-add-select" name="" id=""></select>
      </div>
      <br />
      <div className="for-office-3">
        <label htmlFor="">Komandaya görə</label>
        <input
          value={formik.values.for_team}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="for-office-input"
          type="text"
        />
      </div>
      <div className="for-office-4">
        <label htmlFor="">Kreditor</label>
        <input
          value={formik.values.creditor_per_cent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="for-office-input"
          type="text"
        />
      </div>
      <div className="commissions-add-button">
        <button className="month-add">Ay aralığı əlavə et</button>
        <button className="sale-add">Satış sayı əlavə et</button>
        <button className="refusal-button">İmtina et</button>
        <button type="submit" className="com-add-button">Əlavə et</button>
      </div>
    </div>
    </form>
  );
};

export default CommissionAdd;
