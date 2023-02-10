import "./style.css";

import React, { useState } from "react";
import PageHeader from "../../Header";
import PageArea from "../../Area";
import { Col, Pagination, Row } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterStokAsync } from "../../../redux/slices/Warehouse/stokSlice";
import { useFormik } from "formik";
import { getCompanyAsync } from "../../../redux/slices/humanResourcesSlices/companySlice";
import { getWarehouseAsync } from "../../../redux/slices/Warehouse/warehouseSlice";

const Stok = () => {
  const dispatch = useDispatch();
  let stok = useSelector((state) => state.stok.data);
  let warehouse = useSelector((state) => state.warehouse.data);
  let company = useSelector((state) => state.company.data);
  let [currentPage, setCurrentPage] = useState(1);
  let totalPage = useSelector((state) => state.stok.totalPage);
  let limitPage = useSelector((state) => state.stok.pageLimit);

  const formik = useFormik({
    initialValues: {
      offset: "",
      product: "",
      barcode: "",
      company: "",
      warehouse: "",
    },
    onSubmit: (values) => {
      dispatch(filterStokAsync());
    },
  });

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(getCompanyAsync());
    dispatch(getWarehouseAsync());
    dispatch(filterStokAsync(filteredValues));
  }, [dispatch, formik.values]);

  const changePage = (e) => {
    setCurrentPage(e);
    let offset = (e - 1) * limitPage;
    formik.values.offset = offset;
    let filteredValues = { ...formik.values };
    dispatch(filterStokAsync(filteredValues));
  };

  return (
    <div>
      <PageHeader name="Anbar/Stok" />
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
            <Link className="stok-link-1" to="holding-ofis">
              Holding - Ofis transfer
            </Link>
            <Link className="stok-link-2" to="offices">
              Ofislər arası transfer
            </Link>
            <Link className="stok-link-1" to={'ofis-holding'}>Ofis - Holding transfer</Link>
          </div>
          <table className="stok-table">
            <thead>
              <tr>
                <th className="stok-check">
                  <input type="checkbox" />
                </th>
                <th>Barkod</th>
                <th>Məhsulun adı</th>
                <th className="stok-date">Tarix</th>
                <th>Miqdarı</th>
                <th>Ölçü vahidi</th>
                <th>Anbar</th>
                <th>Şirkət</th>
                <th>Yararlı</th>
                <th>Dəyişim\Söküntü</th>
              </tr>
            </thead>
            <tbody>
              {stok.map((v, i) => (
                <tr key={"stok" + v.id}>
                  <td className="stok-check">
                    <input type="checkbox" />
                  </td>
                  <td></td>
                  <td>{v.product.product_name}</td>
                  <td className="stok-date">{v.date}</td>
                  <td>{v.product.price}</td>
                  <td>
                    {v.product.unit_of_measure
                      ? v.product.unit_of_measure.name
                      : ""}
                  </td>
                  <td>{v.warehouse.name}</td>
                  <td>{v.warehouse.company ? v.warehouse.company.name : ""}</td>
                  <td>{v.useful_product_count}</td>
                  <td>{v.changed_product_count}</td>
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
                className="stok-name"
                placeholder="Məhsul adı axtar"
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="text"
                className="stok-name"
                placeholder="Barkod"
                name="barcode"
                value={formik.values.barcode}
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
                name="warehouse"
                id=""
                value={formik.values.warehouse}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled={true} value="">
                  Anbar
                </option>
                {warehouse.map((v, i) => (
                  <option key={"warehouse" + v.id} value={v.id}>
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

export default Stok;
