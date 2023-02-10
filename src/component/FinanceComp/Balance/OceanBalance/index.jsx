import "./style.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOfficeCashboxAsync } from "../../../../redux/slices/Financeİnstallment/officeCashboxSlice";
import { getCompanyCashboxAsync } from "../../../../redux/slices/Financeİnstallment/companyCashboxSlice";
import { Link } from "react-router-dom";

const OceanBalance = () => {
  let officeCashbox = useSelector((state) => state.officeCashbox.data);
  let companyCashbox = useSelector((state) => state.companyCashbox.data);
  // const rows = [];

  // const amount = rows.map(x=>parseInt(x.amount, 10))
  // let total = 0;
  // for(let i=0; i<amount.length;i++){
  //   total = total + amount[i]
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOfficeCashboxAsync());
    dispatch(getCompanyCashboxAsync());
  }, [dispatch]);

  return (
    <div className="ocean-balance">
      <p className="header-p">Ocean şirkətinin ofisləri və balansı</p>
      <table className="ocean-table">
        <thead>
          <tr>
            <th>Ofis</th>
            <th>Balans</th>
            <th>Qeyd</th>
          </tr>
        </thead>
        <tbody>
          {officeCashbox.map((v, i) => (
            <tr key={"office-cashbox" + v.id}>
              <td>{v.office ? v.office.name : ""}</td>
              <td>{v.balance}</td>
              <td>{v.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {companyCashbox.map((v, i)=> (
        <p key={'companyCash'+v.id} className='total-p'>Ofislərin toplam balansı: {v.offices_of_company_total_balance}</p>
      ))}
      {/* <p className="total-p">Ofislərin toplam balansı: {total}</p> */}
      <div className="ocean-balance-button">
            <Link className="ocean-balance-button-1" to="../">
              Geri Qayıt
            </Link>
            <button type="submit" className="ocean-balance-button-2">
              Yadda saxla
            </button>
          </div>
    </div>
  );
};

export default OceanBalance;
