import React from 'react'
import PageArea from '../../component/Area'
import PageHeader from '../../component/Header'
import './style.css'

const Warehouse = () => {
  return (
    <div>
      <PageHeader name='Anbar' />
      <PageArea />
      <table className='ware-table'>
        <tr>
          <th className='ware-check'><input type="checkbox"/></th>
          <th className='ware-cell'>Anbar adı</th>
          <th className='ware-cell'>Şirkət</th>
          <th className='ware-cell-2'>Ofis</th>
        </tr>
        <tr>
          <td className='ware-check'><input type="checkbox"/></td>
          <td className='ware-cell'>AA34569871203</td>
          <td>Magnus</td>
          <td>Lənkəran</td>
        </tr>
      </table>
    </div>
  )
}

export default Warehouse
