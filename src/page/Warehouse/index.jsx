import { Col, Pagination, Row } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageArea from "../../component/Area";
import PageHeader from "../../component/Header";
import { getCompanyAsync } from "../../redux/slices/humanResourcesSlices/companySlice";
import { getOfficeAsync } from "../../redux/slices/humanResourcesSlices/officeSlice";
import { filterWarehouseAsync } from "../../redux/slices/Warehouse/warehouseSlice";
import "./style.css";

const Warehouse = () => {
  const dispatch = useDispatch();
  let warehouse = useSelector((state) => state.warehouse.data);
  let company = useSelector((state) => state.company.data);
  let office = useSelector((state) => state.office.data);
  let [currentPage, setCurrentPage] = useState(1);
  let totalPage = useSelector((state) => state.warehouse.totalPage);
  let limitPage = useSelector((state) => state.warehouse.pageLimit);


  const formik = useFormik({
    initialValues: {
      offset: "",
      name: "",
      company: "",
      office: ""
    },
    onSubmit: (values)=>{
      dispatch(filterWarehouseAsync())
    }
  })

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync())
    dispatch(getOfficeAsync())
    dispatch(filterWarehouseAsync(filteredValues));
  }, [dispatch, formik.values]);

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterWarehouseAsync(filteredValues));
  };

  return (
    <div>
      <PageHeader name="Anbar" />
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
          <table className="ware-table">
            <thead>
              <tr>
                <th className="ware-check">
                  <input type="checkbox" />
                </th>
                <th className="ware-cell">Anbar adı</th>
                <th className="ware-cell">Şirkət</th>
                <th className="ware-cell-2">Ofis</th>
              </tr>
            </thead>
            <tbody>
              {warehouse.map((v, i) => (
                <tr key={"warehouse" + v.id}>
                  <td className="ware-check">
                    <input type="checkbox" />
                  </td>
                  <td className="ware-cell">{v.name}</td>
                  <td>{v.company ? v.company.name : ""}</td>
                  <td>{v.office ? v.office.name : ""}</td>
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
        </Col>
        <Col span={4}>
          <form action="">
            <div className="warehouse-search">
              <h3>Ətraflı Axtar</h3>
              <input
                type="text"
                className="warehouse-name"
                placeholder="Anbar adı axtar"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <select
                name="company"
                className="warehouse-select"
                placeholder="Şirkət"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled={true} hidden>
                  Şirkət
                </option>
                {company.map((v, i)=>(
                  <option key={"company"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                name="office"
                className="warehouse-select"
                placeholder="Ofis"
                value={formik.values.office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Ofis
                </option>
                {office.map((v, i)=>(
                  <option key={"office"+v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
              <div className="warehouse-delete">
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
  );
};

export default Warehouse;
