import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import PageArea from '../../component/Area'
import PageHeader from '../../component/Header'
import './style.css'

const FinanceAndInstallment = () => {
  return (
    <div>
      <PageHeader name="Mühasibat/Əməkhaqqı"/>
      <PageArea/>
      <Row>
        <Col span={20}>
          <table className="finance-table">
            <thead>
              <tr>
                <th className="finance-check">
                  <input type="checkbox" />
                </th>
                <th>İD</th>
                <th className="finance-cell">Ad Soyad</th>
                <th className="finance-cell-2">Şirkət</th>
                <th className="finance-cell-3">Ofis</th>
                <th className="finance-cell-4">Vəzifə</th>
                <th className="finance-cell-5">İş günü</th>
                <th className="finance-cell-6">Sabit</th>
                <th className="finance-cell-7">Satış sayı</th>
                <th className="finance-cell-8">Komissiya</th>
                <th className="finance-cell-9">Bonus</th>
                <th className='finance-cell-9'>Avans</th>
                <th className='finance-cell-9'>Kəsinti</th>
                <th className='finance-cell-9'>Cərimə</th>
                <th className='finance-cell-9'>Yekun</th>
                <th className='finance-cell-10'>Ə/H ödəmə tarixi</th>
                <th className='finance-cell-10'>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="finance-check">
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td className="finance-cell">Loren Kris</td>
                <td>Magnus</td>
                <td>Bakı</td>
                <td>Mühasib</td>
                <td className="finance-cell-5a">46</td>
                <td className="finance-cell-5a">400</td>
                <td className="finance-cell-5a">500</td>
                <td className="finance-cell-5a">1</td>
                <td className="finance-cell-5a">2</td>
                <td className="finance-cell-5a">2</td>
                <td className="finance-cell-5a">2</td>
                <td className="finance-cell-5a">2</td>
                <td className="finance-cell-5a">2</td>
                <td className='finance-cell-5a'>06/20/2022</td>
                <td className='finance-cell-6a'>Ödənilib</td>
              </tr>
            </tbody>
          </table>

          <div className="finance-button">
            <button className="finance-button-1">
              <Link className="finance-link-1" to="holiday-add">Tətil əlavə et</Link>
            </button>
            <button className="finance-button-2">
                <Link className="finance-link-2" to="permission-add">İcazə əlavə et</Link>
            </button>
          </div>
        </Col>

        <Col span={4}>
          {/* <div className="finance-search">
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
          </div> */}
        </Col>
      </Row>
    </div>
  )
}

export default FinanceAndInstallment
