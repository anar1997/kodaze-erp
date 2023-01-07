import { Col, Row, Pagination, DatePicker } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageArea from "../../component/Area";
import PageHeader from "../../component/Header";
import {
  filterSalaryViewsAsync
} from "../../redux/slices/Financeİnstallment/salaryViewsSlice";
import { getCompanyAsync } from "../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../redux/slices/humanResourcesSlices/officeSlice";
import { getPositionAsync } from "../../redux/slices/humanResourcesSlices/positionSlice";
import "./style.css";

const FinanceAndInstallment = () => {
  const [check, setCheck] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  let data = useSelector((state) => state.salaryView.data);
  let totalPage = useSelector((state) => state.salaryView.totalPage);
  let limitPage = useSelector((state) => state.salaryView.pageLimit);

  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let position = useSelector((state) => state.position.data);

  const formik = useFormik({
    initialValues: {
      offset: "",
      fullname: "",
      salaryStyle: "",
      isActive: "",
      office: "",
      company: "",
      position: "",
      saleQuantity: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values) => {
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterSalaryViewsAsync(filteredValues));
    },
  });

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterSalaryViewsAsync(filteredValues));
  };

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(getPositionAsync());
    dispatch(filterSalaryViewsAsync(filteredValues))
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="Mühasibat/Əməkhaqqı" />
      <PageArea
        menu={[
          { name: "Əməkhaqqı", link: "/finance-and-installment" },
          { name: "Balans", link: "" },
          { name: "Transfer", link: "" },
          { name: "Ödəniş izləmə", link: "" },
          { name: "Kassa Hərəkətləri", link: "" },
        ]}
      />
      <Row>
        <Col span={20}>
          <table className="finance-table">
            <thead>
              <tr>
                <th className="finance-check">
                  <input type="checkbox" />
                </th>
                <th>İD</th>
                <th className="finance-cell">Ad Soyad</th>
                <th className="finance-cell-2">Şirkət</th>
                <th className="finance-cell-3">Ofis</th>
                <th className="finance-cell-4">Vəzifə</th>
                <th className="finance-cell-5">İş günü</th>
                <th className="finance-cell-6">Sabit</th>
                <th className="finance-cell-7">Satış sayı</th>
                <th className="finance-cell-8">Komissiya</th>
                <th className="finance-cell-9">Bonus</th>
                <th className="finance-cell-9">Avans</th>
                <th className="finance-cell-9">Kəsinti</th>
                <th className="finance-cell-9">Cərimə</th>
                <th className="finance-cell-9">Yekun</th>
                <th className="finance-cell-10">Ə/H ödəmə tarixi</th>
                <th className="finance-cell-10">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"working_day" + v.id}>
                  <td className="finance-check">
                    <input
                      onChange={() => setCheck([...check, v.id])}
                      type="checkbox"
                    />
                  </td>
                  <td>{i + 1}</td>
                  <td className="finance-cell">{v.employee.fullname}</td>
                  <td>{v.employee.company ? v.employee.company.name : ""}</td>
                  <td>{v.employee.office ? v.employee.office.name : ""}</td>
                  <td>{v.employee.position ? v.employee.position.name : ""}</td>
                  <td className="finance-cell-5a">
                    {v.extra_data.total_working_day}
                  </td>
                  <td className="finance-cell-5a">{v.employee.salary}</td>
                  <td className="finance-cell-5a">
                    {v.sale_quantity}
                  </td>
                  <td className="finance-cell-5a">
                    {v.commission_amount}
                  </td>
                  <td className="finance-cell-5a">
                    {v.extra_data.total_bonus}
                  </td>
                  <td className="finance-cell-5a">
                    {v.extra_data.total_advancepayment}
                  </td>
                  <td className="finance-cell-5a">
                    {v.extra_data.total_salarydeduction}
                  </td>
                  <td className="finance-cell-5a">
                    {v.extra_data.total_salarypunishment}
                  </td>
                  <td className="finance-cell-5a">
                    {v.final_salary}
                  </td>
                  <td className="finance-cell-5a">{v.pay_date}</td>
                    {v.is_done ? (
                       <td className="finance-cell-6a" style={{color: "green"}}>
                        Ödənilib
                       </td>
                    ) : (
                      <td className="finance-cell-6a" style={{color: "red"}}>
                        Ödənilməyib
                      </td>
                    )}
                 
                </tr>
              ))}
            </tbody>
          </table>

          <div className="finance-button">
            <Link className="finance-link-1" to="advance-add">
              Avans əlavə et
            </Link>

            <Link className="finance-link-1" to="bonus-add">
              Bonus əlavə et
            </Link>

            <Link className="finance-link-1" to="fine-add">
              Cərimə əlavə et
            </Link>

            <Link className="finance-link-1" to="interruption-add">
              Kəsinti əlavə et
            </Link>

            <Link className="finance-link-2" to="pay-salary">
              Ə/H ödə
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
          <form action="" onSubmit={formik.handleSubmit}>
          <div className="finance-search">
            <h3>Ətraflı Axtar</h3>
            <input
              type="text"
              className="finance-personal"
              placeholder="Əməkdaş axtar"
              name="fullname"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <select
              className="finance-select"
              name="company"
              placeholder="Şirkət"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option disabled={true} value="">
                Şirkət
              </option>
              {company.map((v, i) => (
                <option key={"company" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
            <select
              className="finance-select"
              name="office"
              placeholder="Ofis"
              value={formik.values.office}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled hidden>
                Ofis
              </option>
              {office.map((v, i) => (
                <option key={"office" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
            <select
              className="finance-select"
              name="position"
              placeholder="Vəzifə"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled hidden>
                Vəzifə
              </option>
              {position.map((v, i) => (
                <option key={"position" + v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
            <select
              className="finance-select"
              name="isActive"
              placeholder="İşçi statusu"
              value={formik.values.isActive}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
               <option key={"worker-status-1"} value={true}>
                  Aktiv
                </option>
                <option key={"worker-status-2"} value={false}>
                  Passiv
                </option>
            </select>
            <input
              className="finance-select"
              name="saleQuantity"
              placeholder="Satış sayı"
              type="number"
              value={formik.values.saleQuantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <DatePicker
              placeholder="Başlanğıc tarix"
              className="select-time"
              onChange={(e) => setStartDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
            />
            <DatePicker
              placeholder="Son tarix"
              className="select-time"
              onChange={(e) => setEndDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
            />
            <select
              className="finance-select"
              name="salaryStyle"
              value={formik.values.salaryStyle}
              placeholder="Ə/H statusu"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
               <option key={"salary-type-1"} value="Fix">
                  Fix
                </option>
                <option key={"salary-type-2"} value="Fix%2BKommissiya">
                  Fix+Kommissiya
                </option>
                <option key={"salary-type-3"} value="Kommissiya">
                  Kommissiya
                </option>
            </select>
            <div className="finance-delete">
              <button type="submit" className="search-button">
                Axtar
              </button>
              <button className="delete-button">Təmizlə</button>
            </div>
          </div>
        </form>
        </Col>
      </Row>
    </div>
  );
};

export default FinanceAndInstallment;
