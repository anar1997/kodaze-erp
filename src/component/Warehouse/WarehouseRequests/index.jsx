import './style.css'
import React, { useState } from 'react'
import PageHeader from '../../Header'
import PageArea from '../../Area'
import { Col, DatePicker, Pagination, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOfficeAsync } from '../../../redux/slices/humanResourcesSlices/officeSlice'
import { filterWareRequestsAsync } from '../../../redux/slices/Warehouse/wareRequestsSlice'
import { useFormik } from 'formik'
import { getCompanyAsync } from '../../../redux/slices/humanResourcesSlices/companySlice'

const WarehouseRequests = () => {
  const dispatch = useDispatch();
  let wareRequests = useSelector((state)=>state.wareRequests.data)
  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let totalPage = useSelector((state) => state.wareRequests.totalPage);
  let limitPage = useSelector((state) => state.wareRequests.pageLimit);

  const formik = useFormik({
    initialValues: {
      offset: "",
      product: "",
      company: "",
      office: "",
      employee_who_sent_the_request: "",
      dateGte: "",
      dateLte: "",
      status: ""
    },
    onSubmit: (values)=>{
      values.dateGte = startDate;
      values.dateLte = endDate;
      let filteredValues = { ...values };
      dispatch(filterWareRequestsAsync(filteredValues))
    }
  })

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterWareRequestsAsync(filteredValues));
  };

  useEffect(()=>{
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync());
    dispatch(getOfficeAsync());
    dispatch(filterWareRequestsAsync(filteredValues))
  }, [dispatch, formik.values])
  
  return (
    <div>
      <PageHeader name="Anbar/Anbar sorğu" />
      <PageArea
        menu={[
          {
            name: "Anbarlar",
            link: "/warehouse",
            isDropdown: false,
          },
          {
            name: "Holding anbar",
            link: "/warehouse/holding-warehouse",
            isDropdown: false,
          },
          {
            name: "Stok",
            link: "/warehouse/stok",
            isDropdown: false,
          },
          {
            name: "Anbar Sorğu",
            link: "/warehouse/warehouse-requests/",
            isDropdown: false,
          },
          {
            name: "Əlavələr",
            childElement: [
              {
                name: "Ölçü Vahidləri",
                link: "/warehouse/product/unit-of-measure/",
              },
              {
                name: "Kateqoriyalar",
                link: "/warehouse/product/categories/",
              }
            ],
            isDropdown: true,
          },
          {
            name: "Tarixçə",
            link: "/warehouse/warehouse-history/",
            isDropdown: false,
          },
        ]}
      />
      <Row>
        <Col span={20}>
        <div className="stok-button">
            <Link className="stok-link-1" to="send-requests">
              Anbar sorğu göndər
            </Link>
            <table className="requests-table">
            <thead>
              <tr>
                <th className="stok-check">
                  <input type="checkbox" />
                </th>
                <th className='requests-company'>Şirkət</th>
                <th className='requests-office'>Ofis</th>
                <th className='requests-sender'>Sorğu göndərən</th>
                <th className='requests-date'>Sorğu tarixi</th>
                <th>Məhsul\say</th>
                <th className='execution-date'>İcra tarixi</th>
                <th className='requests-status'>Status</th>
                <th className='requests-note'>Qeyd</th>
              </tr>
            </thead>
            <tbody>
              {wareRequests.map((v, i)=>(
                <tr key={'ware-requests'+v.id}>
                    <td className="stok-check">
                    <input type="checkbox" />
                  </td>
                  <td>{v.office ? v.office.company.name : ""}</td>
                  <td>{v.office ? v.office.name : ""}</td>
                  <td>{v.employee_who_sent_the_request ? v.employee_who_sent_the_request.fullname : ""}</td>
                  <td>{v.request_date}</td>
                  <td>{v.product_in_holding_warehouse_quantity}</td>
                  <td>{v.execution_date}</td>
                  <td>{v.status}</td>
                  <td>{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            onChange={(e) => {
              changePage(e);
            }}
            className="pagination"
            current={currentPage}
            total={totalPage}
            defaultPageSize={limitPage}
            showSizeChanger={false}
          />
          </div>
        </Col>
        <Col span={4}>
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="finance-search">
              <h3>Ətraflı Axtar</h3>
              <input
                type="text"
                className="finance-personal"
                placeholder="Məhsul adı axtar"
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <select
                className="finance-select"
                name="company"
                placeholder="Şirkət"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Şirkət
                </option>
                {company.map((v, i) => (
                  <option key={"company" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                className="finance-select"
                name="office"
                placeholder="Ofis"
                value={formik.values.office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Ofis
                </option>
                {office.map((v, i) => (
                  <option key={"office" + v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <input
                className="sent-requests"
                name="employee_who_sent_the_request"
                placeholder="İcraçı"
                value={formik.values.employee_who_sent_the_request}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <DatePicker
                placeholder="Başlanğıc tarix"
                className="select-time"
                onChange={(e) => setStartDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
                format="DD-MM-YYYY"
              />
              <DatePicker
                placeholder="Son tarix"
                className="select-time"
                onChange={(e) => setEndDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
                format="DD-MM-YYYY"
              />
              <select
                className="finance-select"
                name="status"
                value={formik.values.status}
                placeholder="Status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option key={"salary-type-1"} value="Fix">
                  Yerinə Yetirilib
                </option>
                <option key={"salary-type-2"} value="Fix%2BKommissiya">
                  Yerinə Yetirilməyib
                </option>
                <option key={"salary-type-3"} value="Kommissiya">
                  İmtina edildi
                </option>
              </select>
              <div className="finance-delete">
                <button type="submit" className="search-button">
                  Axtar
                </button>
                <button className="delete-button">Təmizlə</button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default WarehouseRequests
