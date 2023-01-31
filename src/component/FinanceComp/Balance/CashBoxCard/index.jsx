import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const CashBoxCard = (props) => {
  let navigate = useNavigate();  

  const routeChange = () =>{
    let path = 'ocean-balance';
    navigate(path);
  }

  return (
    <div className='cash-div' onClick={routeChange}>
      <div className='props-name'>
        <p>{props.name}</p>
      </div>
      <div>
        <p>{props.companyBalance}</p>
      </div>
      <div>
        <p>{props.totalBalance}</p>
      </div>
      
    </div>
  )
}

export default CashBoxCard
