import React, { useEffect } from "react";
import { IoArrowBack, IoCloseSharp, IoPencilSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryAsync } from "../../../redux/slices/Warehouse/categorySlice";
import "./style.css";

const Category = () => {
  let category = useSelector((state) => state.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [dispatch]);

  return (
    <div className="unit-measure">
      <div className="header">
        <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <p>Kateqoriyalar</p>
      </div>
      <Link className="measure-add" to={"add-category"}>
        Kateqoriya əlavə et
      </Link>
      <table className="measure-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th className="measure-cell">Kateqoriyalar</th>
          </tr>
        </thead>
        <tbody>
          {category.map((v, i) => (
            <tr key={"category" + v.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="measure-cell-2">
                {v.category_name}
                <div className="sharp">
                  <IoPencilSharp className="pencil-sharp" />
                  <IoCloseSharp className="close-sharp" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
