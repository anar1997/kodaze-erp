import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageArea from "../../component/Area";
import PageHeader from "../../component/Header";
import { getSalaryViewsAsync } from "../../redux/slices/Financeİnstallment/salaryViewsSlice";
import "./style.css";

const FinanceAndInstallment = () => {
  const [check, setCheck] = useState([]);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.salaryView.data);
  let totalPage = useSelector((state) => state.salaryView.totalPage);
  let limitPage = useSelector((state) => state.salaryView.pageLimit);

  useEffect(() => {
    dispatch(getSalaryViewsAsync());
  }, [dispatch]);

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
                    {v.extra_data.sale_quantity}
                  </td>
                  <td className="finance-cell-5a">
                    {v.extra_data.commission_amount}
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
                    {v.extra_data.final_salary}
                  </td>
                  <td className="finance-cell-5a">{v.extra_data.pay_date}</td>
                  <td className="finance-cell-6a">{v.extra_data.is_done}</td>
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
        </Col>

        <Col span={4}>
          <div className="finance-search">
            <h3>Ətraflı Axtar</h3>
            <div className="check-hold">
              <input type="checkbox" />
              <h5>Holding</h5>
            </div>
            <input
              type="text"
              className="finance-personal"
              placeholder="Əməkdaş axtar"
            />
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Şirkət"
            >
              <option disabled={true} value="">
                Şirkət
              </option>
            </select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Ofis"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Vəzifə"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="İşçi statusu"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Satış sayı"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Başlanğıc tarix"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Son tarix"
            ></select>
            <select
              className="finance-select"
              name=""
              id=""
              placeholder="Ə/H növü"
            ></select>
            <div className="finance-delete">
              <button type="submit" className="search-button">
                Axtar
              </button>
              <button className="delete-button">Təmizlə</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FinanceAndInstallment;
