import React, { useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import profile from "./not-image.png";
import { IoAddCircle } from "react-icons/io5";
import PageHeader from "../Header";
import PageArea from "../Area";

const WorkerAdd = () => {
  const [isHolding, setIsHolding] = useState(false);

  return (
    <div>
      <PageHeader name="Tapsırıqlar" />
      <PageArea menu={[
        {name:"İşçilər", link:"/human-resources"},
        {name:"İş Qrafiki", link:"/human-resources/work-graphic"},
        {name:"Kommissiyalar", link:"/human-resources/commissions"},
      ]}/>
      
      <form action="" className="worker-form">
        <Row>
          <Col className="worker-first" span={10}>
            <input
              placeholder="Adı Soyadı  Ata adı*"
              className="worker-left-header"
              type="text"
            />
            <br />

            <div className="worker-proqram-parametr">
              <label htmlFor="">Telefon 1</label>
              <input name="phone-1" className="worker-telefon" type="text" />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Telefon 2</label>
              <input name="phone-2" className="worker-telefon" type="text" />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Şəhər</label>
              <select name="city" className="worker-uni-select"></select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ünvan</label>
              <input name="address" className="worker-telefon" type="text" />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">E-poçt</label>
              <input name="email" className="worker-telefon" type="text" />
            </div>
            <br />

            {!isHolding ? (
              <>
                <div className="worker-proqram-parametr worker-second-part">
                  <label htmlFor="">Şirkət*</label>
                  <select name="company" className="worker-uni-select"></select>
                </div>
                <div className="worker-proqram-parametr">
                  <label htmlFor="">Ofis*</label>
                  <select name="office" className="worker-uni-select"></select>
                </div>
              </>
            ) : (
              <div className="worker-proqram-parametr">
                <label htmlFor="">Departament*</label>
                <select name="department" className="worker-uni-select"></select>
              </div>
            )}

            <div className="worker-proqram-parametr">
              <label htmlFor="">Supervisor</label>
              <select name="supervisor" className="worker-uni-select"></select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Vəzifə*</label>
              <select name="position" className="worker-uni-select"></select>
            </div>
            <div className="worker-proqram-parametr">
              <label className="worker-button-label" htmlFor="">Şəxsiyyət vəsiqəsi(Ön hissə)</label>
              <Link className="worker-button">Bax</Link>
            </div>
            <div className="worker-proqram-parametr">
              <label className="worker-button-label" htmlFor="">Şəxsiyyət vəsiqəsi(Arxa hissə)</label>
              <Link className="worker-button">Bax</Link>
            </div>
            <div className="worker-proqram-parametr">
              <label className="worker-button-label" htmlFor="">Sürücülük vəsiqəsi</label>
              <Link className="worker-button">Bax</Link>
            </div>
          </Col>
          <Col className="worker-second-col" span={10}>
            <div className="worker-check-hol">
              <div className="worker-holding">
                <input
                  onClick={() => setIsHolding(true)}
                  name="register_type"
                  type="radio"
                />
                <label htmlFor="">Holding</label>
              </div>
              <div className="worker-holding">
                <input
                  onClick={() => setIsHolding(false)}
                  name="register_type"
                  type="radio" 
                  className="worker-company-check"
                />
                <label htmlFor="">Şirkət</label>
              </div>
            </div>
            <br />

            <div className="worker-proqram-parametr">
              <label htmlFor="">İstifadəçi adı</label>
              <input name="username" className="worker-user-name" type="text" />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">İstifadəçi şifrəsi</label>
              <input name="password" className="worker-user-password" type="text" />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">İşçi statusu</label>
              <select className="worker-uni-select" name="worker-status" id=""></select>
            </div>
            <br />
            <div className="worker-proqram-parametr worker-second-part">
              <label htmlFor="">Komissiya növü</label>
              <select className="worker-uni-select-2" name="comission-type" id=""></select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ə/H növü</label>
              <input
                placeholder="komissiya"
                className="worker-user-name-2"
                type="text"
                name="salary-type"
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ə/H (AZN)</label>
              <input
                placeholder="0"
                className="worker-user-name-2"
                type="text"
                name="salary"
              />
            </div>
            <br />
            <div className="worker-middle-bottom-col">
              <label htmlFor="">Qeyd</label>
              <textarea name="note" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="worker-middle-bottom-col-2">
              <label htmlFor="">Imza*</label>
              <textarea name="signature" id="" cols="30" rows="10"></textarea>
            </div>
          </Col>
          <Col span={4}>
            <img
              className="worker-profile-pic worker-img"
              src={profile}
              alt=""
            />
            <div className="worker-i-img">
              <div className="worker-p-image">
                <IoAddCircle className="worker-i-pencil worker-upload-button" />
                <input
                  className="worker-file-upload"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <div className="worker-kitabxana-button">
          <div className="worker-confirm">
            <input type="checkbox" />
            <label>Müqavilə Şərtləri</label> oxudum və qəbul etdim
          </div>
          <button className="worker-kitabxana-button-1">Ləğv et</button>
          <button className="worker-kitabxana-button-2">Əlavə et</button>
        </div>
      </form>
    </div>
  );
};

export default WorkerAdd;
