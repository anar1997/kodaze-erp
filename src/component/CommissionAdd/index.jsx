import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCommissionAsync } from "../../redux/slices/humanResourcesSlices/commissionSlice";
import { getMonthRangeAsync } from "../../redux/slices/humanResourcesSlices/monthRangeSlice";
import "./style.css";

const CommissionAdd = () => {
  const dispatch = useDispatch();

  // const [monthId, setMonthId] = useState(["", "", "", ""]);
  // const [monthSalary, setMonthSalary] = useState(["", "", "", ""]);

  function handleMonthId(e, i) {
    console.log(e.target.value);
    console.log(i);
  }

  function handleMonthSalary(e, i) {
    console.log(e.target.value);
    console.log(i);
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
      dispatch(postCommissionAsync(values));
    },
  });

  useEffect(() => {
    dispatch(getMonthRangeAsync());
  }, [dispatch]);

  return (
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
          onChange={(e) => handleMonthId(e, 1)}
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
            <option key={"month-range-option2" + v.id + i} value={v.id}>
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
            <option key={"month-range-option3" + v.id} value={v.id}>
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
      <div className="credit-range">
        <select
          onChange={(e) => handleMonthId(e, 4)}
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
          onChange={(e) => handleMonthSalary(e, 4)}
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
        <button className="com-add-button">Əlavə et</button>
      </div>
    </div>
  );
};

export default CommissionAdd;
