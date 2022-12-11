import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PageArea from "../Area";
import PageHeader from "../Header";
import "./style.css";
const HumanTable = () => {
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
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>2</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>3</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>4</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>5</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>6</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>7</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>8</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>9</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
              <tr>
                <td className="human-check">
                  <input type="checkbox" />
                </td>
                <td>10</td>
                <td className="human-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="human-cell-5a">46</td>
                <td className="human-cell-5a">400</td>
                <td className="human-cell-5a">500</td>
                <td className="human-cell-5a">1</td>
                <td className="human-cell-5a">2</td>
              </tr>
            </tbody>
          </table>

          <div className="humantable-button">
            <button className="humantable-button-1">
              <Link className="humantable-link-1" to="holiday-add">Tətil əlavə et</Link>
            </button>
            <button className="humantable-button-2">
                <Link className="humantable-link-2" to="permission-add">İcazə əlavə et</Link>
            </button>
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
