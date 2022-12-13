import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageArea from "../../component/Area";
import PageHeader from "../../component/Header";
import "./style.css";
import { IoPencil, IoTrash, IoCloseCircle } from "react-icons/io5";
import man from "./man.jfif";
import { Col, Divider, Row } from "antd";
import HumanCard from "../../component/Card";
import { useSelector, useDispatch } from "react-redux";
import { usersAsync } from "../../redux/user/userSlice";

const HumanResources = () => {
  let [userIns, setUserIns] = useState([])
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.userData);
  console.log("ilkin user data => "+userData);

  useEffect(() => {
    dispatch(usersAsync());
    setUserIns(userData)
    console.log("User 1 fullname" + userData)
  }, []);
  return (
    <div>
      <PageHeader name="Insan Resursları" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources" },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic" },
          { name: "Kommissiyalar", link: "/human-resources/commissions" },
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
            {/* {userIns.map((user, index) => {
              <Col key={"user"+index} className="human-card-col gutter-row">
                <HumanCard name="salam" company={user.company} position={user.position} number={user.phone_number_1}/>
              </Col>
            })} */}
          </Row>
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

export default HumanResources;
