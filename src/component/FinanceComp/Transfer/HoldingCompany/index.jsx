import { Col, Row, DatePicker, Pagination } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterHoldingCompanyAsync } from "../../../../redux/slices/Financeİnstallment/Transfer/holdingCompanySlice";
import { getCompanyAsync } from "../../../../redux/slices/humanResourcesSlices/companySlice";
import PageArea from "../../../Area";
import PageHeader from "../../../Header";
import "./style.css";

const HoldingCompany = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.holdingCompany.data);
  let totalPage = useSelector((state) => state.holdingCompany.totalPage);
  let limitPage = useSelector((state) => state.holdingCompany.pageLimit);
  

  let company = useSelector((state) => state.company.data);


  const formik = useFormik({
    initialValues: {
      offset: "",
      executor: "",
      sendingCompany: "",
      receivingCompany: "",
      transferAmount: "",
      transferDate: "",
      transferNote: "",
      recipientSubsequentBalance: "",
      senderSubsequentBalance: "",
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values) => {
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterHoldingCompanyAsync(filteredValues))
    },
  });

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values }
    dispatch(filterHoldingCompanyAsync(filteredValues))
  };

  
  useEffect(() => {
    let filteredValues = { ...formik.values }
    dispatch(getCompanyAsync())
    dispatch(filterHoldingCompanyAsync(filteredValues));
  }, [dispatch, formik.values]);

  return (
    <div>
      <PageHeader name="Maliyyə və Kredit/Holding şirkət arası transfer" />
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
          <Link className="transfer-link" to="transfered-company">
            Transfer et
          </Link>
          <table className="offices-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tarix</th>
                <th>Açıqlama</th>
                <th>Məbləğ</th>
                <th>Göndərən</th>
                <th>Göndərənin Son balansı</th>
                <th>Qəbul edən</th>
                <th>Qəbul edənin Son balansı</th>
                <th>İcraçı</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => (
                <tr key={"holding_transfer" + v.id}>
                  <td>{i + 1}</td>
                  <td>{v.transfer_date}</td>
                  <td className="td-note">{v.transfer_note}</td>
                  <td>{v.transfer_amount}</td>
                  <td>{v.sending_company ? v.sending_company.name : ""}</td>
                  <td>{v.sender_subsequent_balance}</td>
                  <td>{v.receiving_company ? v.receiving_company.name : ""}</td>
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
          <form action="" onSubmit={formik.handleSubmit}>
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
                value={formik.values.sendingCompany}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Göndərən
                </option>
                {company.map((v, i) => (
                  <option key={"sending-company"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="finance-select"
                name="recipient"
                placeholder="Qəbul edən"
                value={formik.values.receivingCompany}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Qəbul edən
                </option>
                {company.map((v, i)=>(
                  <option key={"receive-company"+v.id} value={v.id}>
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

export default HoldingCompany;
