import React, { useRef, useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import profile from "./not-image.png";
import { IoAddCircle } from "react-icons/io5";
import PageHeader from "../../Header";
import PageArea from "../../Area";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersAsync,
  postUserAsync,
} from "../../../redux/slices/humanResourcesSlices/userSlice";
import { useFormik } from "formik";
import { useEffect } from "react";
import { getRegionsAsync } from "../../../redux/slices/humanResourcesSlices/regionSlice";
import { getCompanyAsync } from "../../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../../redux/slices/humanResourcesSlices/officeSlice";
import { getDepartamentAsync } from "../../../redux/slices/humanResourcesSlices/departamentSlice";
import { getPositionAsync } from "../../../redux/slices/humanResourcesSlices/positionSlice";
import { getCommissionAsync } from "../../../redux/slices/humanResourcesSlices/commissionSlice";
import validations from "./validation";
import SignatureCanvas from "react-signature-canvas";

const WorkerAdd = () => {
  const [isHolding, setIsHolding] = useState(false);

  const dispatch = useDispatch();

  const changeRegisterType = (data) => {
    setIsHolding(data);
  };

  let region = useSelector((state) => state.region.data);
  let commission = useSelector((state) => state.commission.data);
  let company = useSelector((state) => state.company.data);
  let departament = useSelector((state) => state.departament.data);
  let office = useSelector((state) => state.office.data);
  let position = useSelector((state) => state.position.data);
  let supervisor = useSelector((state) => state.users.users);

  const formik = useFormik({
    initialValues: {
      register_type: "Şirkət",
      fullname: "",
      phone_number_1: "",
      phone_number_2: "",
      city: "",
      address: "",
      email: "",
      company: "",
      office: "",
      departament: "",
      supervisor: "",
      position: "",
      photo_ID: "",
      back_photo_of_ID: "",
      driving_license_photo: "",
      password: "",
      is_active: "",
      commission: "",
      salary_style: "",
      salary: "",
      note: "",
      electronic_signature: "",
      profile_image: "",
    },
    onSubmit: (values) => {
      dispatch(postUserAsync(values));
    },
    validationSchema: validations,
  });

  const inputFile = useRef(null);

  const signCanvas = useRef({});

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const clear = () => signCanvas.current.clear();

  useEffect(() => {
    dispatch(getRegionsAsync());
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(getUsersAsync());
    dispatch(getDepartamentAsync());
    dispatch(getPositionAsync());
    dispatch(getCommissionAsync());
  }, [dispatch]);


  return (
    <div>
      <PageHeader name="Tapsırıqlar" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources" },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic" },
          { name: "Kommissiyalar", link: "/human-resources/commissions" },
        ]}
      />

      <form
        className="worker-form"
        onSubmit={formik.handleSubmit}
        id="register-form"
      >
        <Row>
          <Col className="worker-first" span={10}>
            <input
              placeholder="Adı Soyadı  Ata adı*"
              className="worker-left-header"
              type="text"
              name="fullname"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullname && (
              <div className="error">{formik.errors.fullname}</div>
            )}
            <br />

            <div className="worker-proqram-parametr">
              <label htmlFor="">Telefon 1</label>
              <input
                name="phone_number_1"
                className="worker-telefon"
                type="text"
                value={formik.values.phone_number_1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Telefon 2</label>
              <input
                className="worker-telefon"
                type="text"
                name="phone_number_2"
                value={formik.values.phone_number_2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Şəhər</label>
              <select
                className="worker-uni-select"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {region.map((v, i) => (
                  <option key={"region" + v.id} value={v.id}>
                    {v.region_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ünvan</label>
              <input
                className="worker-telefon"
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">E-poçt</label>
              <input
                name="email"
                value={formik.values.email}
                className="worker-telefon"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />

            {!isHolding ? (
              <>
                <div className="worker-proqram-parametr worker-second-part">
                  <label htmlFor="">Şirkət*</label>
                  <select
                    name="company"
                    value={formik.values.company}
                    className="worker-uni-select"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {company.map((v, i) => (
                      <option key={"company" + v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="worker-proqram-parametr">
                  <label htmlFor="">Ofis*</label>
                  <select
                    name="office"
                    value={formik.values.office}
                    className="worker-uni-select"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {office.map((v, i) => (
                      <option key={"office" + v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div className="worker-proqram-parametr">
                <label htmlFor="">Departament*</label>
                <select
                  name="departament"
                  value={formik.values.departament}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="worker-uni-select"
                >
                  {departament.map((v, i) => (
                    <option key={"departament" + v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="worker-proqram-parametr">
              <label htmlFor="">Supervisor</label>
              <select
                name="supervisor"
                value={formik.values.supervisor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-uni-select"
              >
                {supervisor.map((v, i) => (
                  <option key={"supervisor" + v.id} value={v.id}>
                    {v.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Vəzifə*</label>
              <select
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-uni-select"
              >
                {position.map((v, i) => (
                  <option key={"position" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="worker-proqram-parametr">
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="worker-button-label" htmlFor="">
                Şəxsiyyət vəsiqəsi(Ön hissə)
              </label>
              <Link onClick={onButtonClick} className="worker-button">
                Bax
              </Link>
            </div>
            <div className="worker-proqram-parametr">
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="worker-button-label" htmlFor="">
                Şəxsiyyət vəsiqəsi(Arxa hissə)
              </label>
              <Link className="worker-button">Bax</Link>
            </div>
            <div className="worker-proqram-parametr">
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="worker-button-label" htmlFor="">
                Sürücülük vəsiqəsi
              </label>
              <Link className="worker-button">Bax</Link>
            </div>
          </Col>
          <Col className="worker-second-col" span={10}>
            <div className="worker-check-hol">
              <div className="worker-holding">
                <input
                  onClick={() => {
                    changeRegisterType(true);
                  }}
                  name="register_type"
                  type="radio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="Holding"
                  checked={formik.values.register_type === "Holding"}
                />
                <label htmlFor="">Holding</label>
              </div>
              <div className="worker-holding">
                <input
                  onClick={() => {
                    changeRegisterType(false);
                  }}
                  name="register_type"
                  type="radio"
                  className="worker-company-check"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="Şirkət"
                  checked={formik.values.register_type === "Şirkət"}
                />
                <label htmlFor="">Şirkət</label>
              </div>
            </div>
            <br />

            {/* <div className="worker-proqram-parametr">
              <label htmlFor="">İstifadəçi adı</label>
              <input name="username" className="worker-user-name" type="text" />
            </div> */}
            <div className="worker-proqram-parametr">
              <label htmlFor="">İstifadəçi şifrəsi</label>
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">İşçi statusu</label>
              <select
                className="worker-uni-select"
                name="worker-status"
                id=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option key={"worker-status-1"} value={true}>
                  Aktiv
                </option>
                <option key={"worker-status-2"} value={false}>
                  Passiv
                </option>
              </select>
            </div>
            <br />
            <div className="worker-proqram-parametr worker-second-part">
              <label htmlFor="">Komissiya növü</label>
              <select
                className="worker-uni-select-2"
                name="comission-type"
                id=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {commission.map((v, i) => (
                  <option key={"commission" + v.id} value={v.id}>
                    {v.commission_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ə/H növü</label>
              <select
                className="worker-user-name-2"
                type="text"
                name="salary-type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option key={"salary-type-1"} value="Fix">
                  Fix
                </option>
                <option key={"salary-type-2"} value="Fix+Kommissiya">
                  Fix+Kommissiya
                </option>
                <option key={"salary-type-3"} value="Kommissiya">
                  Kommissiya
                </option>
              </select>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Ə/H (AZN)</label>
              <input
                placeholder="0"
                className="worker-user-name-2"
                type="text"
                name="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />
            <div className="worker-middle-bottom-col">
              <label htmlFor="">Qeyd</label>
              <textarea
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="worker-middle-bottom-col-2">
              <label htmlFor="">Imza*</label>
              <SignatureCanvas
                ref={signCanvas}
                penColor="black"
                canvasProps={{
                  className: "sigCanvas signature",
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div style={{cursor: "pointer"}} onClick={clear}>Təmizlə</div>
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
                  name="profile_image"
                  value={formik.values.profile_image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
          <Link to=".." className="worker-kitabxana-button-1">Ləğv et</Link>
          <button
            type="submit"
            form="register-form"
            className="worker-kitabxana-button-2"
          >
            Əlavə et
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkerAdd;
