import React, { useEffect } from "react";
import "./style.css";
import man from "./man.jfif";
import { IoPencil, IoTrash } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


const HumanCard = (props) => {
  let navigate=useNavigate();
  const routeChange=()=>{
    let path='worker-detail';
    navigate(path);
  }
  return (
    <div className="human-card-1" onClick={routeChange}>
      <img className="human-img" src={props.profile_image} alt="" />

      <div className="human-detail">
        <p className="human-card-title">{props.name}</p>
        <p>{props.company}</p>
        <p>{props.position}</p>
        <p>{props.number}</p>
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
