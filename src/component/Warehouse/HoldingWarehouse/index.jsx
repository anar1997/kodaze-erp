import "./style.css";
import React, { useState } from "react";
import PageHeader from "../../Header";
import PageArea from "../../Area";
import { Col, Pagination, Row } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterHoldingWarehouseAsync } from "../../../redux/slices/Warehouse/holdingWarehouseSlice";
import { useFormik } from "formik";

const HoldingWarehouse = () => {
  const dispatch = useDispatch();
  let holdingWarehouse = useSelector((state) => state.holdingWarehouse.data);
  let [currentPage, setCurrentPage] = useState(1);
  let totalPage = useSelector((state) => state.holdingWarehouse.totalPage);
  let limitPage = useSelector((state) => state.holdingWarehouse.pageLimit);

  const formik = useFormik({
    initialValues: {
        offset: "",
        product: "",
        barcode: ""
    },
    onSubmit: (values)=>{
        dispatch(filterHoldingWarehouseAsync())
    }
  })

  useEffect(() => {
    let filteredValues = { ...formik.values };
    dispatch(filterHoldingWarehouseAsync(filteredValues));
  }, [dispatch, formik.values]);

    const changePage = (e) => {
        setCurrentPage(e);
        let offset = (e - 1) * limitPage;
        formik.values.offset = offset;
        let filteredValues = { ...formik.values };
        dispatch(filterHoldingWarehouseAsync(filteredValues));
    };

  return (
    <div>
      <PageHeader name="Anbar/Holding anbar" />
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
          <div className="holding-warehouse-button">
            <Link className="holding-warehouse-link-1" to="product-add">
              Məhsul əlavə et
            </Link>
            <Link className="holding-warehouse-link-2" to="utilization">
              Utilizasiya
            </Link>
          </div>
          <table className="ware-table">
            <thead>
              <tr>
                <th className="ware-check">
                  <input type="checkbox" />
                </th>
                <th>Barkod</th>
                <th>Məhsulun adı</th>
                <th>Miqdarı</th>
                <th>Qiyməti(AZN)</th>
                <th>Hədiyyə</th>
                <th>Miqdarı(yararlı)</th>
                <th>Miqdarı(yararsız)</th>
              </tr>
            </thead>
            <tbody>
              {holdingWarehouse.map((v, i) => (
                <tr key={"holding-warehouse" + v.id}>
                  <td className="ware-check">
                    <input type="checkbox" />
                  </td>
                  <td>{v.product.barcode}</td>
                  <td>
                    {v.product.category ? v.product.category.category_name : ""}
                  </td>
                  <td>{v.quantity}</td>
                  <td>{v.product.price}</td>
                  <td>{v.product.is_gift ? "+" : "-"}</td>
                  <td>{v.useful_product_count}</td>
                  <td>{v.unuseful_product_count}</td>
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
                className="warehouse-holding-name"
                placeholder="Məhsul adı axtar"
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="text"
                className="warehouse-holding-name"
                placeholder="Barkod"
                name="barcode"
                value={formik.values.barcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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

export default HoldingWarehouse;
