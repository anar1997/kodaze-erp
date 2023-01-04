import React from "react";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCommissionAsync } from "../../../redux/slices/humanResourcesSlices/commissionSlice";
import { Pagination } from "antd";
import { useState } from "react";

const Commisions = () => {
  let [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch();
  let data = useSelector((state) => state.commission.data);
  let totalPage = useSelector((state) => state.commission.totalPage);
  let limitPage = useSelector((state) => state.commission.pageLimit);

  console.log(totalPage);
  const changePage = (e) =>{
    setCurrentPage(e);
    let offset = (e-1)*limitPage;
    dispatch(getCommissionAsync(offset))
  }

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
        <Link className="commissions-button" to="commission-add">
          Komissiya Əlavə et
        </Link>
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
      {totalPage>20 ?(<Pagination onChange={(e)=>{changePage(e)}} className="pagination-2" current={currentPage} total={totalPage} defaultPageSize={limitPage} showSizeChanger={false}/>
):("")}
    </div>
  );
};

export default Commisions;
