import './style.css'
import React from 'react'
import { useSelector } from 'react-redux'

const OceanBalance = () => {
  let data = useSelector((state)=>state.oceanBalance.data)

  

  return (
    <div className='ocean-balance'>
      <p>Ocean şirkətinin ofisləri və balansı</p>
      <table className='ocean-table'>
        <thead>
            <tr>
                <th>Ofis</th>
                <th>Balans</th>
                <th>Qeyd</th>
            </tr>
        </thead>
        <tbody>
            {data.map((v, i)=>(
                <tr key={"ocean-balance"+v.id}>
                    <td>{}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default OceanBalance
