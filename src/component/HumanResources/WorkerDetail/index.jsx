import React from "react";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import profile from "./man.jfif";
import { IoPencil, IoTrash } from "react-icons/io5";
import "./style.css";

const WorkerDetail = () => {
  return (
    <div>
      <PageHeader name="İnsan Resursları/İşçi kartı" />
      <PageArea />
      <form action="" className="detail-form">
        <Row>
          <Col className="detail-first" span={10}>
            <input
              placeholder="Adı Soyadı  Ata adı*"
              className="detail-left-header"
              type="text"
            />
            <br />

            <div className="detail-proqram-parametr">
              <label htmlFor="">Telefon 1</label>
              <input name="phone-1" className="detail-telefon" type="text" />
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Telefon 2</label>
              <input name="phone-2" className="detail-telefon" type="text" />
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Şəhər</label>
              <select name="city" className="detail-uni-select"></select>
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Ünvan</label>
              <input name="address" className="detail-telefon" type="text" />
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">E-poçt</label>
              <input name="email" className="detail-telefon" type="text" />
            </div>
            <br />
            <div className="detail-proqram-parametr detail-second-part">
              <label htmlFor="">Şirkət</label>
              <select name="company" className="detail-uni-select"></select>
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Ofis</label>
              <select name="office" className="detail-uni-select"></select>
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Departament</label>
              <select name="department" className="detail-uni-select"></select>
            </div>

            <div className="detail-proqram-parametr">
              <label htmlFor="">Supervisor</label>
              <select name="supervisor" className="detail-uni-select"></select>
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Vəzifə</label>
              <select name="position" className="detail-uni-select"></select>
            </div>
            <div className="detail-proqram-parametr">
              <label className="detail-button-label" htmlFor="">
                Şəxsiyyət vəsiqəsi(Ön hissə)
              </label>
              <Link className="detail-button">Bax</Link>
            </div>
            <div className="detail-proqram-parametr">
              <label className="detail-button-label" htmlFor="">
                Şəxsiyyət vəsiqəsi(Arxa hissə)
              </label>
              <Link className="detail-button">Bax</Link>
            </div>
            <div className="detail-proqram-parametr">
              <label className="detail-button-label" htmlFor="">
                Sürücülük vəsiqəsi
              </label>
              <Link className="detail-button">Bax</Link>
            </div>
          </Col>
          <Col className="detail-second-col" span={10}>
            <div className="detail-check-hol"></div>
            <br />
            <br />

            <div className="detail-proqram-parametr">
              <label htmlFor="">İstifadəçi adı</label>
              <input name="username" className="detail-user-name" type="text" />
            </div>

            <div className="detail-proqram-parametr">
              <label htmlFor="">İşçi statusu</label>
              <select
                className="detail-uni-select"
                name="detail-status"
                id=""
              ></select>
            </div>
            <br />
            <div className="detail-proqram-parametr detail-second-part">
              <label htmlFor="">Komissiya növü</label>
              <select
                className="detail-uni-select-2"
                name="comission-type"
                id=""
              ></select>
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Ə/H növü</label>
              <input
                placeholder="komissiya"
                className="detail-user-name-2"
                type="text"
                name="salary-type"
              />
            </div>
            <div className="detail-proqram-parametr">
              <label htmlFor="">Ə/H (AZN)</label>
              <input
                placeholder="0"
                className="detail-user-name-2"
                type="text"
                name="salary"
              />
            </div>
            <br />
            <div className="detail-middle-bottom-col">
              <label htmlFor="">Qeyd</label>
              <textarea name="note" id="" cols="30" rows="10"></textarea>
            </div>
          </Col>
          <Col span={4}>
            <img
              className="detail-profile-pic detail-img"
              src={profile}
              alt=""
            />
            <div className="detail-i-img">
              <div className="detail-p-image">
                <div className="detail-card-icon">
                  <Link>
                    <IoPencil className="detail-i-pencil" />
                  </Link>
                  <form action="">
                    {/* <button className="detail-i-trash-button" href=""> */}
                      <IoTrash className="detail-i-trash" />
                    {/* </button> */}
                  </form>
                </div>
                <input
                  className="detail-file-upload"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <div className="detail-kitabxana-button">
          <button className="detail-kitabxana-button-3">Şifrəni dəyiş</button>
          <button className="detail-kitabxana-button-4">
            Xidməti müqaviləsi
          </button>
          <button className="detail-kitabxana-button-5">Tarixçə</button>
          <button className="detail-kitabxana-button-1">Ləğv et</button>
          <button className="detail-kitabxana-button-2">Yadda Saxla</button>
        </div>
      </form>
    </div>
  );
};

export default WorkerDetail;
