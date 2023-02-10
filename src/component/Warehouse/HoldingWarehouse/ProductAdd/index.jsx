import "./style.css";
import React, { useEffect } from "react";
import PageHeader from "../../../Header";
import PageArea from "../../../Area";
import { Col, Row } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  getHoldingWarehouseAsync,
  postProductAsync,
} from "../../../../redux/slices/Warehouse/holdingWarehouseSlice";
import { IoAddCircle } from "react-icons/io5";
import profile from "./not-image.png";


const ProductAdd = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      product: "",
      barcode: "",
      category: "",
      unit_of_measure: "",
      purchase_price: "",
      price: "",
      quantity: "",
      guarantee: "",
      weight: "",
      width: "",
      length: "",
      height: "",
      volume: "",
      note: "",
    },
    onSubmit: (values) => {
      dispatch(postProductAsync());
    },
  });

  useEffect(() => {
    dispatch(getHoldingWarehouseAsync());
  }, [dispatch]);
  return (
    <div>
      <PageHeader name="Anbar/Məhsul əlavə et" />
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
              },
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
        <Col span={10} className={'worker-first'}>
          <label htmlFor="">Məhsulun Adı*</label>
          <input
            className="worker-left-header"
            type="text"
            name="product"
            value={formik.values.product}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* {formik.errors.fullname && (
            <div className="error">{formik.errors.fullname}</div>
          )} */}
          <br />
          <div className="worker-proqram-parametr">
            <label htmlFor="">Barkod</label>
            <input
              name="barcode"
              className="worker-telefon"
              type="text"
              value={formik.values.barcode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="worker-proqram-parametr">
            <label htmlFor="">Kateqoriya</label>
            <select
              className="worker-uni-select"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {/* {region.map((v, i) => (
                <option key={"region" + v.id} value={v.id}>
                  {v.region_name}
                </option>
              ))} */}
            </select>
          </div>
          <div className="worker-proqram-parametr">
            <label htmlFor="">Ölçü vahidi</label>
            <select
              className="worker-uni-select"
              name="unit_of_measure"
              value={formik.values.unit_of_measure}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={null}></option>
              {/* {region.map((v, i) => (
                <option key={"region" + v.id} value={v.id}>
                  {v.region_name}
                </option>
              ))} */}
            </select>
          </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Alış Qiyməti</label>
              <input
                className="worker-telefon"
                type="text"
                name="purchase_price"
                value={formik.values.purchase_price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Satış Qiyməti</label>
              <input
                className="worker-telefon"
                type="text"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Miqdarı</label>
              <input
                className="worker-telefon"
                type="text"
                name="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Zəmanət (ay)</label>
              <input
                className="worker-telefon"
                type="text"
                name="guarantee"
                value={formik.values.guarantee}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br /><br />
            <div className="check-product">
              <input type="checkbox" />
              <label htmlFor="">Hədiyyə</label>
            </div>
        </Col>
        <Col span={10} className="worker-second-col">
        <div className="worker-proqram-parametr">
              <label htmlFor="">Çəkisi</label>
              <div>
              <input
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
              <label htmlFor="">kq</label>
              </div>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Eni</label>
              <div>
              <input
                name="width"
                value={formik.values.width}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
              <label htmlFor="">m</label>
              </div>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Uzunluğu</label>
              <div>
              <input
                name="length"
                value={formik.values.length}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
              <label htmlFor="">m</label>
              </div>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Hündürlüyü</label>
              <div>
              <input
                name="height"
                value={formik.values.height}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
              <label htmlFor="">m</label>
              </div>
            </div>
            <div className="worker-proqram-parametr">
              <label htmlFor="">Həcmi</label>
              <div>
              <input
                name="volume"
                value={formik.values.volume}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="worker-user-password"
                type="text"
              />
              <label htmlFor="">m</label>
              </div>
            </div>
            <br />
            <div className="worker-proqram-parametr">
              <label htmlFor="">Qeyd</label>
              <textarea
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id=""
                cols="37"
                rows="10"
              ></textarea>
            </div>
        </Col>
        <Col span={4}>
        <img
              className="worker-profile-pic worker-img"
              src={profile}
              alt=""
            />
            <div className="worker-i-img">
              <div className="worker-p-image">
                <IoAddCircle className="worker-i-pencil worker-upload-button" />
                <input
                  className="worker-file-upload"
                  type="file"
                  accept="image/*"
                  name="profile_image"
                  value={formik.values.profile_image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductAdd;
