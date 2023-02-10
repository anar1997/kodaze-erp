import "./style.css";
import React, { useState } from "react";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import { Col, DatePicker, Row } from "antd";
import { useFormik } from "formik";

const WarehouseHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formik = useFormik({
    initialValues: {
      dateGte: "",
      dateLte: "",
    },
    onSubmit: (values) => {
      values.dateGte = startDate;
      values.dateLte = endDate;
    },
  });

  return (
    <div>
      <PageHeader name="Anbar/Əməliyyatlar" />
      <PageArea
        menu={[
          {
            name: "Anbarlar",
            link: "/warehouse",
            isDropdown: false,
          },
          {
            name: "Holding anbar",
            link: "/warehouse/holding-warehouse",
            isDropdown: false,
          },
          {
            name: "Stok",
            link: "/warehouse/stok",
            isDropdown: false,
          },
          {
            name: "Anbar Sorğu",
            link: "/warehouse/warehouse-requests/",
            isDropdown: false,
          },
          {
            name: "Əlavələr",
            childElement: [
              {
                name: "Ölçü Vahidləri",
                link: "/warehouse/product/unit-of-measure/",
              },
              {
                name: "Kateqoriyalar",
                link: "/warehouse/product/categories/",
              },
            ],
            isDropdown: true,
          },
          {
            name: "Tarixçə",
            link: "/warehouse/warehouse-history/",
            isDropdown: false,
          },
        ]}
      />
      <Row>
        <Col span={20}>
          <table className="history-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Tarix</th>
                <th>Şirkət</th>
                <th>Çıxış</th>
                <th>Öncəki miqdar</th>
                <th>Sonrakı miqdar</th>
                <th>Giriş</th>
                <th>Öncəki miqdar</th>
                <th>Sonrakı miqdar</th>
                <th>Müştəri</th>
                <th>Məhsul\Miqdar</th>
                <th>Əməlliyyat növü</th>
                <th>İcraçı</th>
                <th>Qeyd</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </Col>
        <Col span={4}>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="finance-search">
              <h3>Ətraflı Axtar</h3>
              <input
                type="text"
                className="stok-name"
                placeholder="Müştəri"
                name="product"
              />
              <input
                type="text"
                className="stok-name"
                placeholder="Məhsul adı axtar"
                name="product"
              />
              <input
                type="text"
                className="stok-name"
                placeholder="Telefon"
                name="product"
              />
              <select
                className="finance-select"
                name="company"
                placeholder="Şirkət"
              >
                <option disabled={true} value="">
                  Şirkət
                </option>
                {/* {company.map((v, i) => (
                  <option key={"company" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))} */}
              </select>
              <select
                className="finance-select"
                name="office"
                placeholder="Çıxış"
              >
                <option value="" disabled hidden>
                  Çıxış
                </option>
                {/* {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))} */}
              </select>
              <select
                className="finance-select"
                name="office"
                placeholder="Giriş"
              >
                <option value="" disabled hidden>
                  Giriş
                </option>
                {/* {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))} */}
              </select>
              <select
                className="finance-select"
                name="office"
                placeholder="Əməliyyat növü"
              >
                <option value="" disabled hidden>
                  Əməliyyat növü
                </option>
                {/* {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))} */}
              </select>
              <input
                className="sent-requests"
                name="employee_who_sent_the_request"
                placeholder="İcraçı"
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

export default WarehouseHistory;
