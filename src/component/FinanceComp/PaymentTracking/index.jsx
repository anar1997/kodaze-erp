import { Col, Pagination, Row, DatePicker } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPaymentTrackingAsync } from "../../../redux/slices/Financeİnstallment/paymentTrackingSlice";
import { getCompanyAsync } from "../../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../../redux/slices/humanResourcesSlices/officeSlice";
import { getPositionAsync } from "../../../redux/slices/humanResourcesSlices/positionSlice";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import "./style.css";

const PaymentTracking = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  let data = useSelector((state) => state.paymentTracking.data);
  let totalPage = useSelector((state) => state.paymentTracking.totalPage)
  let limitPage = useSelector((state) => state.paymentTracking.pageLimit)

  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let region = useSelector((state)=>state.region.data)

  const formik = useFormik({
    initialValues: {
      offset: "",
      customer: "",
      company: "",
      office: "",
      position: "",
      paymentStatus: "",
      region: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values)=>{
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterPaymentTrackingAsync(filteredValues))
    }
  })

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterPaymentTrackingAsync(filteredValues));
  };
  

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(getPositionAsync());
    dispatch(filterPaymentTrackingAsync(filteredValues))
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="Maliyyə və Kredit/Ödəniş izləmə" />
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
          <table className="payment-table">
            <thead>
              <tr>
                <th>Ödəmə tarixi</th>
                <th>Müştəri</th>
                <th>Ödəyəcəyi məbləğ</th>
                <th>Ödəmə statusu</th>
                <th>Kreditor</th>
                <th>Şirkət</th>
                <th>Ofis</th>
                <th>Şəhər</th>
                <th>Qalıq borcu</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"payment-tracking"+v.id}>
                  <td>{v.date}</td>
                  <td>{v.contract.customer ? v.contract.customer.fullname : ""}</td>
                  <td>{v.price}</td>
                  <td>{v.payment_status}</td>
                  <td>{v.contract_creditor ? v.contract_creditor.fullname : ""}</td>
                  <td>{v.contract.company ? v.contract.company.name : ""}</td>
                  <td>{v.contract.office ? v.contract.office.name : ""}</td>
                  <td>{v.contract.customer.region ? v.contract.customer.region.region_name : ""}</td>
                  <td>{v.contract.remaining_debt}</td>
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
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="finance-search">
              <h3>Ətraflı Axtar</h3>
              <input
                type="text"
                className="finance-personal"
                placeholder="Müştəri axtar"
                name="customer"
                value={formik.values.customer}
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
                placeholder="Kreditor"
                // value={formik.values.position}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Vəzifə
                </option>
                {/* {position.map((v, i) => (
                  <option key={"position" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))} */}
              </select>
              <select
                className="finance-select"
                name="paymentStatus"
                placeholder="Ödəmə statusu"
                value={formik.values.payStatusHelper}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option key={"worker-status-1"} value={true}>
                  ÖDƏNMƏYƏN
                </option>
                <option key={"worker-status-2"} value={false}>
                  ÖDƏNƏN
                </option>
                <option key={"worker-status-3"} value={false}>
                  BURAXILMIŞ AY
                </option>
                <option key={"worker-status-4"} value={false}>
                  NATAMAM AY
                </option>
                <option key={"worker-status-5"} value={false}>
                  RAZILAŞDIRILMIŞ AZ ÖDƏMƏ
                </option>
                <option key={"worker-status-6"} value={false}>
                  ARTIQ ÖDƏMƏ
                </option>
                <option key={"worker-status-7"} value={false}>
                  SON AYIN BÖLÜNMƏSİ
                </option>
              </select>
              <select
                className="finance-select"
                name="region"
                placeholder="Şəhər"
                type="text"
                value={formik.values.region}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Şəhər
                </option>
                {region.map((v,i)=>(
                  <option key={"region"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
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

export default PaymentTracking;
