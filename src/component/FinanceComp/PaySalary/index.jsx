import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PaySalary = () => {
  return (
    <div className='pay-salary'>
        <div className='pay-p'>
        <p>Seçilmiş şəxs və ya şəxslərin</p>
        <p>Əməkhaqqıları ödəmək istədiyinizə əminsiniz?</p>
        </div>
        <br />
        <div className="pay-div">
        <Link to=".." className="pay-button-1">
          Xeyr
        </Link>
        <Link type="submit" className="pay-button-2">
          Bəli
        </Link>
      </div>
    </div>
  )
}

export default PaySalary