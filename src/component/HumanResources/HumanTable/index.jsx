import { Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterWorkGraphicAsync
} from "../../../redux/slices/humanResourcesSlices/workGraphicSlice";
import { useEffect } from "react";
import { useFormik } from "formik";
import { DatePicker } from 'antd';
import { getCompanyAsync } from "../../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../../redux/slices/humanResourcesSlices/officeSlice";
import { getPositionAsync } from "../../../redux/slices/humanResourcesSlices/positionSlice";

const HumanTable = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  let data = useSelector((state) => state.workGraphic.data);
  let totalPage = useSelector((state) => state.workGraphic.totalPage);
  let limitPage = useSelector((state) => state.workGraphic.pageLimit);

  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let position = useSelector((state) => state.position.data);

  const formik = useFormik({
    initialValues: {
      offset: "",
      holding: false,
      fullname: "",
      company: "",
      office: "",
      position: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values) => {
      values.dateGte = startDate;
      console.log(values.dateGte);
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterWorkGraphicAsync(filteredValues));
    },
  });

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = {...formik.values}
    dispatch(filterWorkGraphicAsync(filteredValues));
  };

  const [check, setCheck] = useState([]);

  useEffect(() => {
    let filteredValues = {...formik.values}
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(getPositionAsync());
    dispatch(filterWorkGraphicAsync(filteredValues));
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="İnsan resursları/İş qrafiki" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources", isDropdown: false },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic", isDropdown: false },
          { name: "Kommissiyalar", link: "/human-resources/commissions", isDropdown: false },
        ]}
      />

      <Row>
        <Col span={20}>
          <table className="human-table">
            <thead>
              <tr>
                <th className="human-check">
                  <input type="checkbox" />
                </th>
                <th>İD</th>
                <th className="human-cell">Ad Soyad</th>
                <th className="human-cell-2">Şirkət</th>
                <th className="human-cell-3">Ofis</th>
                <th className="human-cell-4">Vəzifə</th>
                <th className="human-cell-5">İş günü</th>
                <th className="human-cell-6">Sabit</th>
                <th className="human-cell-7">Tətil</th>
                <th className="human-cell-8">Ödənişli</th>
                <th className="human-cell-9">Ödənişsiz</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"working_day" + v.id}>
                  <td className="human-check">
                    <input
                      onChange={() => setCheck([...check, v.id])}
                      type="checkbox"
                    />
                  </td>
                  <td>{i + 1}</td>
                  <td className="human-cell">{v.employee.fullname}</td>
                  <td>{v.employee.company ? v.employee.company.name : ""}</td>
                  <td>{v.employee.office ? v.employee.office.name : ""}</td>
                  <td>{v.employee.position ? v.employee.position.name : ""}</td>
                  <td className="human-cell-5a">{v.working_days_count}</td>
                  <td className="human-cell-5a">{v.employee.salary}</td>
                  <td className="human-cell-5a">
                    {v.extra_data.total_holiday}
                  </td>
                  <td className="human-cell-5a">
                    {v.extra_data.total_payed_days_off}
                  </td>
                  <td className="human-cell-5a">
                    {v.extra_data.total_unpayed_days_off}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="humantable-button">
            <Link className="humantable-button-1" to="holiday-add">
              Tətil əlavə et
            </Link>
            <Link
              className="humantable-button-1"
              to="permission-add"
              state={{ from: check }}
            >
              İcazə əlavə et
            </Link>
          </div>
          <Pagination
            onChange={(e) => {
              changePage(e);
            }}
            className="pagination"
            current={currentPage}
            total={totalPage}
            defaultPageSize={limitPage}
            showSizeChanger={false}
          />
        </Col>

        <Col span={4}>
          <form onSubmit={formik.handleSubmit}>
            <div className="human-search">
              <h3>Ətraflı Axtar</h3>
              <div className="check-hold">
                <input
                  type="checkbox"
                  id="holdingId"
                  name="holding"
                  value={formik.values.holding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h5>Holding</h5>
              </div>
              <input
                type="text"
                className="search-personal"
                placeholder="Personal"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <select
                className="search-select"
                name="company"
                placeholder="Şirkət"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Company
                </option>
                {company.map((v, i) => (
                  <option key={"company" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="office"
                value={formik.values.office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Office
                </option>
                {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Position
                </option>
                {position.map((v, i) => (
                  <option key={"position" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <DatePicker placeholder="Başlanğıc tarix" className="search-personal-2" onChange={(e)=>setStartDate(`${e.$D}-${e.$M+1}-${e.$y}`)} format="DD-MM-YYYY" />
              <DatePicker placeholder="Son tarix" className="search-personal-2" onChange={(e)=>setEndDate(`${e.$D}-${e.$M+1}-${e.$y}`)} format="DD-MM-YYYY" />
              <div className="search-delete">
                <button type="submit" className="search-button">
                  Axtar
                </button>
                <button
                  onClick={() => formik.resetForm()}
                  className="delete-button"
                >
                  Təmizlə
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default HumanTable;
