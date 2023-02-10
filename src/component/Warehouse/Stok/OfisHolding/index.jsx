import React from 'react'
import { IoAddCircleOutline, IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './style.css'

const OfisHoldingStok = () => {
  return (
    <div className="holding-ofis-stok">
      <div className="uti-header">
        <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <p>Ofis Holding transfer</p>
      </div>
      <br />
      <div className='utilization-parametr-3'>
            <label htmlFor="">Şirkət</label>
            <select name="" id="" className='utilization-select-2'></select>
        </div>
        <div className='utilization-parametr-3'>
            <label htmlFor="">Anbar</label>
            <select name="" id="" className='utilization-select-2'></select>
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

export default OfisHoldingStok
