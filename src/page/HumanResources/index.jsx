import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageArea from "../../component/Area";
import PageHeader from "../../component/Header";
import "./style.css";
import { Col, Row, Pagination } from "antd";
import HumanCard from "../../component/HumanResources/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  filterUserAsync,
  getUsersAsync,
} from "../../redux/slices/humanResourcesSlices/userSlice";
import { useFormik } from "formik";
import { getCompanyAsync } from "../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../redux/slices/humanResourcesSlices/officeSlice";
import { getDepartamentAsync } from "../../redux/slices/humanResourcesSlices/departamentSlice";
import { getPositionAsync } from "../../redux/slices/humanResourcesSlices/positionSlice";

const HumanResources = () => {
  let [currentPage, setCurrentPage] = useState(1);

  //Get current posts

  const dispatch = useDispatch();
  let userData = useSelector((state) => state.users.users);
  let totalPage = useSelector((state) => state.users.totalPage);
  let limitPage = useSelector((state) => state.users.pageLimit);

  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let departament = useSelector((state) => state.departament.data);
  let position = useSelector((state) => state.position.data);

  const formik = useFormik({
    initialValues: {
      offset: "",
      holding: false,
      fullname: "",
      company: "",
      office: "",
      departament: "",
      position: "",
      salary_style: "",
    },
    onSubmit: (values) => {
      let filteredValues = { ...values };
      dispatch(filterUserAsync(filteredValues));
    },
  });

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterUserAsync(filteredValues));
  };

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(getDepartamentAsync());
    dispatch(getPositionAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log(totalPage);
  });

  return (
    <div>
      <PageHeader name="Insan Resursları" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources", isDropdown: false },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic", isDropdown: false },
          { name: "Kommissiyalar", link: "/human-resources/commissions", isDropdown: false },
        ]}
      />

      <Row className="human-resources">
        <Col span={20}>
          <div className="div-human-add">
            <Link className="human-add" to="register">
              İşçi əlavə et
            </Link>
          </div>

          <Row className="human-card-row">
            {userData.map((user, index) => (
              <Col
                key={"user" + user.id}
                className="human-card-col gutter-row"
                span={6}
              >
                <HumanCard
                  profile_image={user.photo_ID}
                  name={user.fullname}
                  company={user.company ? user.company.name : ""}
                  position={user.position ? user.position.name : ""}
                  number={user.phone_number_1}
                />
              </Col>
            ))}
          </Row>
          <Pagination
            className="pagination"
            onChange={(e) => {
              changePage(e);
            }}
            current={currentPage}
            total={totalPage}
            defaultPageSize={limitPage}
          />
        </Col>

        <Col span={4}>
          <form onSubmit={formik.handleSubmit}>
            <div className="human-search">
              <h3>Ətraflı Axtar</h3>
              <div className="check-hold">
                <input
                  type="checkbox"
                  id="holdingId"
                  name="holding"
                  value={formik.values.holding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h5>Holding</h5>
              </div>
              <input
                type="text"
                className="search-personal"
                placeholder="Personal"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <select required={false}
                className="search-select"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={""} disabled hidden>
                   Company                      
                </option>
                {company.map((v, i) => (
                  <option className="select-option" key={"company" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="office"
                value={formik.values.office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option style={{ color: "red" }} value={""} disabled hidden>
                   Office                      
                </option>
                {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="departament"
                placeholder="Departament"
                value={formik.values.departament}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option style={{ color: "red" }} value={""} disabled hidden>
                  Departament                       
                </option>
                {departament.map((v, i) => (
                  <option key={"departament" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="position"
                placeholder="Vəzifə"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option style={{ color: "red" }} value={""} disabled hidden>
                  Vəzifə
                </option>
                {position.map((v, i) => (
                  <option key={"position" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="search-select"
                name="salary_style"
                id=""
                value={formik.values.salary_style}
                placeholder="Ə/H növü"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option style={{ color: "red" }} value={""} disabled hidden>
                  Ə/H növü
                </option>
                <option key={"salary-type-1"} value="Fix">
                  Fix
                </option>
                <option key={"salary-type-2"} value="Fix%2BKommissiya">
                  Fix+Kommissiya
                </option>
                <option key={"salary-type-3"} value="Kommissiya">
                  Kommissiya
                </option>
              </select>
              <div className="search-delete">
                <button type="submit" className="search-button">
                  Axtar
                </button>
                <button
                  onClick={() => formik.resetForm()}
                  className="delete-button"
                >
                  Təmizlə
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default HumanResources;
