import React from 'react'
import { IoAddCircleOutline, IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SendWarehouseRequests = () => {
  return (
    <div className="utilization">
      <div className="uti-header">
        <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <p>Anbar sorğu göndər</p>
      </div>
      <br />
      <div className="utilization-div">
        <div className="utilization-parametr">
          <select name="" id="" className="utilization-select">
            <option value={null}>Məhsul</option>
          </select>
          <div className="number-add-icon">
            <input className="number-input" type="number" />
            <IoAddCircleOutline className="add-icon" />
          </div>
        </div>
        <div className="utilization-parametr">
          <select name="" id="" className="utilization-select">
            <option value={null}>Məhsul</option>
          </select>
          <div className="number-add-icon">
            <input className="number-input" type="number" />
            <IoAddCircleOutline className="add-icon" />
          </div>
        </div>
        <div className="utilization-parametr">
          <select name="" id="" className="utilization-select">
            <option value={null}>Məhsul</option>
          </select>
          <div className="number-add-icon">
            <input className="number-input" type="number" />
            <IoAddCircleOutline className="add-icon" />
          </div>
        </div>
        <div className="utilization-parametr">
          <select name="" id="" className="utilization-select">
            <option value={null}>Məhsul</option>
          </select>
          <div className="number-add-icon">
            <input className="number-input" type="number" />
            <IoAddCircleOutline className="add-icon" />
          </div>
        </div>
        <div className="utilization-parametr">
          <select name="" id="" className="utilization-select">
            <option value={null}>Məhsul</option>
          </select>
          <div className="number-add-icon">
            <input className="number-input" type="number" />
            <IoAddCircleOutline className="add-icon" />
          </div>
        </div>
        <br />
        <div className="note-parametr">
          <label htmlFor="">Qeyd</label>
          <textarea name="utilization-note" id="" cols="43" rows="8"></textarea>
        </div>
        <div className="utilization-button">
          <Link className="utilization-button-1" to="../">
            Ləğv et
          </Link>
          <button type="submit" className="utilization-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendWarehouseRequests
