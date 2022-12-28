import { Col, Row } from "antd";
import React from "react";
import {
  IoAddCircle,
  IoLockClosed,
  IoPencil,
  IoPersonCircle,
  IoSettings,
  IoTrash,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";
import profile from "./not-image.png";

const AccountSettings = () => {
  return (
    <div>
      <form>
        <Row className="account-hesab-div">
          <Col span={10} className="account-left-header">
            <div className="account-hesab">
              <IoPersonCircle className="account-hesab-icon" />
              <p>İstifadəçi parametrləri</p>
            </div>
            <div className="account-bottom-line"></div>

            <div className="account-proqram-parametr">
              <label>Ad Soyad Ata adı</label>
              <input type="text" />
            </div>
            <div className="account-proqram-parametr">
              <label>İstifadəçi adı</label>
              <input type="text" />
            </div>
            <div className="account-proqram-parametr">
              <label>Tel.nömrəsi 1</label>
              <input type="text" />
            </div>
            <div className="account-proqram-parametr">
              <label>Tel.nömrəsi 2</label>
              <input type="text" />
            </div>
            <div className="account-proqram-parametr">
              <label>E-poçt</label>
              <input type="text" />
            </div>

            <div className="account-left-bottom-header">
              <div className="account-password-col">
                <IoLockClosed className="account-password-col-icon" />
                <p>Şifrə dəyişmək</p>
              </div>
              <div className="account-bottom-line"></div>
              <br />
              <div className="account-proqram-parametr">
                <label>Yeni Şifrə</label>
                <input type="password" />
              </div>
              <div className="account-proqram-parametr">
                <label>Yeni Şifrəni təkrarla</label>
                <input type="password" />
              </div>
            </div>
          </Col>
          <Col span={10} className="account-middle-header">
            <div className="account-settings">
              <IoSettings className="account-settings-icon" />
              <p>Tətbiq parametrləri</p>
            </div>
            <div className="account-bottom-line"></div>
            <br />
            <div className="account-proqram-parametr">
              <label>Logo</label>
              <div className="account-look">
              <Link className="account-id-card">Bax</Link>
                <Link>
                  <IoPencil className="i-pencil" />
                </Link>
                <form action="">
                  <button className="i-trash-button" href="">
                    <IoTrash className="i-trash" />
                  </button>
                </form>
              </div>
              </div>
            <br />
            <div className="account-proqram-parametr">
              <label>İstifadəçi şəkli</label>
              <div className="account-look">
              <Link className="account-id-card">Bax</Link>
                <Link>
                  <IoPencil className="i-pencil" />
                </Link>
                <form action="">
                  <button className="i-trash-button" href="">
                    <IoTrash className="i-trash" />
                  </button>
                </form>
              </div>
            </div>
          </Col>
          <Col span={4} className="account-third-col">
            <img src={profile} className="account-profile-pic account-img" alt="profile-img" />
            <div className="account-i-img">
              <div className="account-p-image">
                <IoAddCircle className="account-i-pencil account-upload-button" />
                <input
                  type="file"
                  accept="image/*"
                  className="account-file-upload"
                />
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AccountSettings;
