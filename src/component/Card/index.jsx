import React from "react";
import "./style.css";
import man from "./man.jfif";
import { IoPencil, IoTrash } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "antd";

const HumanCard = () => {
  let navigate=useNavigate();
  const routeChange=()=>{
    let path='worker-detail';
    navigate(path);
  }
  return (
    <div className="human-card-1" onClick={routeChange}>
      <img className="human-img" src={man} alt="" />

      <div className="human-detail">
        <h6 className="human-card-title">Əliyev Vahid Fərid</h6>
        <p>Holding</p>
        <p>Marketinq</p>
        <p>050 220 20 20</p>
        <div className="human-card-icon">
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
    </div>
  );
};

export default HumanCard;
