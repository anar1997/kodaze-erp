import { Col, Row, DatePicker, Pagination } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCheckoutOperationsAsync } from "../../../redux/slices/Financeİnstallment/checkoutOperationsSlice";
import { getCompanyAsync } from "../../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../../redux/slices/humanResourcesSlices/officeSlice";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import "./style.css";

const CheckoutOperations = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  let data = useSelector((state) => state.checkoutOperations.data);
  let totalPage = useSelector((state) => state.checkoutOperations.totalPage);
  let limitPage = useSelector((state) => state.checkoutOperations.pageLimit);

  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);

  const formik = useFormik({
    initialValues: {
      offset: "",
      executor: "",
      company: "",
      office: "",
      description: "",
      personal: "",
      customer: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values)=>{
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterCheckoutOperationsAsync(filteredValues))
    }
  });

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterCheckoutOperationsAsync(filteredValues));
  };

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(filterCheckoutOperationsAsync(filteredValues))
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="Maliyyə və Kredit/Kassa Hərəkətləri" />
      <PageArea
        menu={[
          {
            name: "Əməkhaqqı",
            link: "/finance-and-installment",
            isDropdown: false,
          },
          {
            name: "Balans",
            link: "/finance-and-installment/balance",
            isDropdown: false,
          },
          {
            name: "Transfer",
            childElement: [
              {
                name: "Holding Şirkət arası transfer",
                link: "/finance-and-installment/holding-company-transfer",
              },
              {
                name: "Şirkət ofis arası transfer",
                link: "/finance-and-installment/company-office-transfer",
              },
              {
                name: "Ofislər arası transfer",
                link: "/finance-and-installment/offices-transfer",
              },
            ],
            isDropdown: true,
          },
          {
            name: "Ödəniş izləmə",
            link: "/finance-and-installment/payment-tracking",
            isDropdown: false,
          },
          {
            name: "Kassa Hərəkətləri",
            link: "/finance-and-installment/checkout-operations",
            isDropdown: false,
          },
        ]}
      />
      <Row>
        <Col span={20}>
          <div className="checkout-button">
            <Link className="checkout-link-1" to="company-operation">
              Şirkət Əməlliyyat
            </Link>
            <Link className="checkout-link-2" to="holding-operation">
              Holding Əməlliyyat
            </Link>
          </div>
          <table className="checkout-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tarix</th>
                <th>Açıqlama</th>
                <th>Əməlliyyat</th>
                <th>Məbləğ</th>
                <th>Balans</th>
                <th>Müştəri</th>
                <th>Personal</th>
                <th>Şirkət</th>
                <th>Ofis</th>
                <th>İcraçı</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"checkout-operations" + v.id}>
                  <td>{i + 1}</td>
                  <td>{v.date}</td>
                  <td>{v.description}</td>
                  <td>{v.operation_style}</td>
                  <td>{v.quantity}</td>
                  <td>{v.balance}</td>
                  <td>{v.customer ? v.customer.fullname : ""}</td>
                  <td>{v.personal ? v.personal.fullname : ""}</td>
                  <td>{v.company ? v.company.name : ""}</td>
                  <td>{v.office ? v.office.name : ""}</td>
                  <td>{v.executor ? v.executor.fullname : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <form action="">
            <div className="finance-search">
              <h3>Ətraflı Axtar</h3>
              <input
                type="text"
                className="finance-personal"
                placeholder="İcraçı"
                name="executor"
                value={formik.values.executor}
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
              <input
                type="text"
                className="finance-select"
                name="description"
                placeholder="Açıqlama"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                className="finance-select"
                name="personal"
                placeholder="Personal"
                value={formik.values.personal}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                
              <input
                className="finance-select"
                name="customer"
                placeholder="Müştəri"
                type="text"
                value={formik.values.customer}
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

export default CheckoutOperations;
