import React, { useEffect } from "react";
import { IoArrowBack, IoCloseSharp, IoPencilSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUnitOfMeasureAsync } from "../../../redux/slices/Warehouse/unitOfMeasureSlice";
import "./style.css";

const UnitOfMeasure = () => {
  let unitOfMeasure = useSelector((state) => state.unitOfMeasure.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitOfMeasureAsync());
  }, [dispatch]);

  return (
    <div className="unit-measure">
      <div className="header">
        <Link to={".."}>
          <IoArrowBack className="transfer-arrow" />
        </Link>
        <p>Ölçü Vahidləri cədvəli</p>
      </div>
      <Link className="measure-add" to={"add-to-measure"}>
        Ölçü vahidi əlavə et
      </Link>
      <table className="measure-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th className="measure-cell">Ölçü vahidləri</th>
          </tr>
        </thead>
        <tbody>
          {unitOfMeasure.map((v, i) => (
            <tr key={"unit-of-measure" + v.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="measure-cell-2">
                {v.name}
                <div className="sharp">
                  <IoPencilSharp className="pencil-sharp" />
                  <IoCloseSharp className="close-sharp" />
                </div>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="measure-cell-2">
              Qram
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td>
          </tr> */}
          {/* 
            <td className="measure-cell-2">
              Litr
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td>
            <td className="measure-cell-2">
              Santimetr
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td>
            <td className="measure-cell-2">
              Millimetr
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td>
            <td className="measure-cell-2">
              Ton
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td>
            <td className="measure-cell-2">
              Qutu
              <div className="sharp">
                <IoPencilSharp className="pencil-sharp" />
                <IoCloseSharp className="close-sharp" />
              </div>
            </td> */}
        </tbody>
      </table>
    </div>
  );
};

export default UnitOfMeasure;
