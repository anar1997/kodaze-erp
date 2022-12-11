import React from 'react'
import './style.css'

const CommissionAdd = () => {
  return (
    <div className='commission-add'>
    {/* <h4 className='commission-type'>Komissiya növü</h4>  kicik dizayn ucun  */}
    <h2 className='commission-type'>Komissiya növü</h2>
    <br />
    <input className='commission-add-name' type="text" placeholder='Komissiya adı' />
    <div className='for-office'>
        <label htmlFor="">Ofisə görə</label>
        <input className='for-office-input' type="text" />
    </div>
    <div className='for-office-2'>
        <label htmlFor="">Nəğd</label>
        <input placeholder='180' className='for-office-input' type="text" />
    </div>
    <br />
    <h3 className='credit-range-h5'>Kredit aralığı</h3>
    <div className='credit-range'>
        <select className='commission-add-select' name="" id=""></select>
        <input className='for-office-input' placeholder='180' type="text" />
    </div>
    <div className='credit-range'>
        <select className='commission-add-select' name="" id=""></select>
        <input className='for-office-input' placeholder='160' type="text" />
    </div>
    <div className='credit-range'>
        <select className='commission-add-select' name="" id=""></select>
        <input className='for-office-input' placeholder='140' type="text" />
    </div>
    <div className='credit-range'>
        <select className='commission-add-select' name="" id=""></select>
        <input className='for-office-input' placeholder='120' type="text" />
    </div>
    <br />
    <h3 className='credit-range-2-h5'>Satış sayı aralığı</h3>
    <div className='credit-range-2'>
        <select className='commission-add-select' name="" id=""></select>
        <input className='for-office-input' placeholder='300' type="text" />
        <select className='commission-add-select' name="" id=""></select>
    </div>
    <br />
    <div className='for-office-3'>
        <label htmlFor="">Komandaya görə</label>
        <input placeholder='20' className='for-office-input' type="text" />
    </div>
    <div className='for-office-4'>
        <label htmlFor="">Kreditor</label>
        <input className='for-office-input' type="text" />
    </div>
    <div className="commissions-add-button">
     <button className='month-add'>Ay aralığı əlavə et</button>
     <button className='sale-add'>Satış sayı əlavə et</button>
    </div>
    </div>
  )
}

export default CommissionAdd;