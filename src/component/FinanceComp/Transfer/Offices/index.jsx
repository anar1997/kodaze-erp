import { Col, Row, DatePicker, Pagination } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterOfficesAsync, getOfficesAsync } from "../../../../redux/slices/Financeİnstallment/Transfer/officesSlice";
import PageArea from "../../../Area";
import PageHeader from "../../../Header";
import "./style.css";

const Offices = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let [currentPage, setCurrentPage] = useState(1);


  const dispatch = useDispatch();
  let data = useSelector((state) => state.offices.data);
  let totalPage = useSelector((state)=>state.offices.totalPage)
  let limitPage = useSelector((state)=>state.offices.pageLimit)
  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);

  const formik = useFormik({
    initialValues: {
      offset: "",
      executor: "",
      company: "",
      sendingOffice: "",
      receivingOffice: "",
      transferAmount: "",
      transferDate: "",
      transferNote: "",
      recipientSubsequentBalance: "",
      senderSubsequentBalance: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values)=>{
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterOfficesAsync(filteredValues))
    }
  })

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e-1)*limitPage
    formik.values.offset=offset
    let filteredValues = {...formik.values}
    dispatch(filterOfficesAsync(filteredValues))
  }

  useEffect(() => {
    let filteredValues = {...formik.values}
    dispatch(getOfficesAsync());
    dispatch(filterOfficesAsync(filteredValues))
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="Maliyyə və Kredit/Ofislər arası transfer" />
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
          <Link className="transfer-link" to="transfered-offices">
            Transfer et
          </Link>
          <table className="offices-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tarix</th>
                <th>Açıqlama</th>
                <th>Məbləğ</th>
                <th>Şirkət</th>
                <th>Göndərən</th>
                <th>Göndərənin Son balansı</th>
                <th>Qəbul edən</th>
                <th>Qəbul edənin Son balansı</th>
                <th>İcraçı</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"offices_transfer" + v.id}>
                  <td>{i + 1}</td>
                  <td>{v.transfer_date}</td>
                  <td>{v.transfer_note}</td>
                  <td>{v.transfer_amount}</td>
                  <td>{v.company ? v.company.name : ""}</td>
                  <td>{v.sending_office ? v.sending_office.name : ""}</td>
                  <td>{v.sender_subsequent_balance}</td>
                  <td>{v.receiving_office ? v.receiving_office.name : ""}</td>
                  <td>{v.recipient_subsequent_balance}</td>
                  <td>{v.executor.fullname}</td>
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
              <h3>Ətraflı axtar</h3>
              <input
                type="text"
                className="finance-personal"
                placeholder="Açıqlama axtar"
                name="fullname"
                value={formik.values.transferNote}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <select
                className="finance-select"
                name="sender"
                placeholder="Göndərən"
                value={formik.values.sendingOffice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Göndərən
                </option>
                {office.map((v,i)=>(
                  <option key={"sending-office"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="finance-select"
                name="recipient"
                placeholder="Qəbul edən"
                value={formik.values.receivingOffice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Qəbul edən
                </option>
                {office.map((v, i)=>(
                  <option key={"receiving-office"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="finance-select"
                name="senderFinalBalance"
                placeholder="Göndərənin son balansı"
                value={formik.values.senderSubsequentBalance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="text"
                className="finance-select"
                name="recipientFinalBalance"
                placeholder="Qəbul edənin son balansı"
                value={formik.values.recipientSubsequentBalance}
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

export default Offices;
