import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PageArea from "../Area";
import PageHeader from "../Header";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getWorkGraphicAsync } from "../../redux/slices/humanResourcesSlices/workGraphicSlice";
import { useEffect } from "react";

const HumanTable = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.workGraphic.data);

  useEffect(() => {
    dispatch(getWorkGraphicAsync());
  }, [dispatch]);

  return (
    <div>
      <PageHeader name="İnsan resursları/İş qrafiki" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources" },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic" },
          { name: "Kommissiyalar", link: "/human-resources/commissions" },
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
                <tr key={"working_day"+v.id}>
                  <td className="human-check">
                    <input type="checkbox" />
                  </td>
                  <td>{i+1}</td>
                  <td className="human-cell">{v.employee.fullname}</td>
                  <td>{v.employee.company ? (v.employee.company.name) : ("")}</td>
                  <td>{v.employee.office ? (v.employee.office.name) : ("")}</td>
                  <td>{v.employee.position ? (v.employee.position.name) : ("")}</td>
                  <td className="human-cell-5a">{v.working_days_count}</td>
                  <td className="human-cell-5a">{v.employee.salary}</td>
                  <td className="human-cell-5a">{v.extra_data.total_holiday}</td>
                  <td className="human-cell-5a">{v.extra_data.total_payed_days_off}</td>
                  <td className="human-cell-5a">{v.extra_data.total_unpayed_days_off}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="humantable-button">
              <Link className="humantable-button-1" to="holiday-add">
                Tətil əlavə et
              </Link>
              <Link className="humantable-button-1" to="permission-add">
                İcazə əlavə et
              </Link>
          </div>
        </Col>

        <Col span={4}>
          <div className="human-search">
            <h3>Ətraflı Axtar</h3>
            <div className="check-hold">
              <input type="checkbox" />
              <h5>Holding</h5>
            </div>
            <input
              type="text"
              className="search-personal"
              placeholder="Personal"
            />
            <select
              className="search-select"
              name=""
              id=""
              placeholder="Şirkət"
            >
              <option disabled={true} value="">
                Şirkət
              </option>
            </select>
            <select
              className="search-select"
              name=""
              id=""
              placeholder="Ofis"
            ></select>
            <select
              className="search-select"
              name=""
              id=""
              placeholder="Departament"
            ></select>
            <select
              className="search-select"
              name=""
              id=""
              placeholder="Vəzifə"
            ></select>
            <select
              className="search-select"
              name=""
              id=""
              placeholder="Ə/H növü"
            ></select>
            <div className="search-delete">
              <button className="delete-button">Təmizlə</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HumanTable;
