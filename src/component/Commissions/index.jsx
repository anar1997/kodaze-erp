import React from "react";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import PageArea from "../Area";
import PageHeader from "../Header";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCommissionAsync } from "../../redux/slices/humanResourcesSlices/commissionSlice";

const Commisions = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.commission.data);

  useEffect(() => {
    dispatch(getCommissionAsync());
  }, [dispatch]);

  return (
    <div>
      <PageHeader name="İnsan resursları/İş qrafiki" />
      <PageArea
        menu={[
          { name: "İşçilər", link: "/human-resources" },
          { name: "İş Qrafiki", link: "/human-resources/work-graphic" },
          { name: "Kommissiyalar", link: "/human-resources/commissions" },
        ]}
      />
      <button className="commissions-button">
        <Link className="commissions-button-link" to="commission-add">
          Komissiya Əlavə et
        </Link>
      </button>
      <table className="commissions-table">
        <thead>
          <tr>
            <th className="commissions-cell">Komissiya adı</th>
            <th className="commissions-cell-2"></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="commissions-cell">Office Leader</td>
            <td className="commissions-cell-2">
              <IoPencil className="commissions-icon" />
            </td>
          </tr> */}
          {data.map((v, i) => (
            <tr key={"commisson_name"+v.id}>
              <td className="commissions-cell">{v.commission_name}</td>
              <td className="commissions-cell-2">
                <IoPencil className="commissions-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Commisions;
