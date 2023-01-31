import { Col, Row } from "antd";
import "./style.css";
import React from "react";
import PageArea from "../../Area";
import PageHeader from "../../Header";
import CashBoxCard from "./CashBoxCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHoldingCashboxAsync } from "../../../redux/slices/Financeİnstallment/holdingCashboxSlice";
import { getCompanyCashboxAsync } from "../../../redux/slices/Financeİnstallment/companyCashboxSlice";

const Balance = () => {
  let company = useSelector((state) => state.company.data);
  let holdingCashbox = useSelector((state) => state.holdingCashbox.data);
  let companyCashbox = useSelector((state) => state.companyCashbox.data);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getHoldingCashboxAsync())
    dispatch(getCompanyCashboxAsync())
  },[dispatch])

  return (
    <div className="balance-div">
      <PageHeader name="Maliyyə və Kredit/Balans" />
      <PageArea
        menu={[
          {
            name: "Əməkhaqqı",
            link: "/finance-and-installment",
            isDropdown: false,
          },
          {
            name: "Balans",
            link: "/finance-and-installment/balance",
            isDropdown: false,
          },
          {
            name: "Transfer",
            childElement: [
              {
                name: "Holding Şirkət arası transfer",
                link: "/finance-and-installment/holding-company-transfer",
              },
              {
                name: "Şirkət ofis arası transfer",
                link: "/finance-and-installment/company-office-transfer",
              },
              {
                name: "Ofislər arası transfer",
                link: "/finance-and-installment/offices-transfer",
              },
            ],
            isDropdown: true,
          },
          {
            name: "Ödəniş izləmə",
            link: "/finance-and-installment/payment-tracking",
            isDropdown: false,
          },
          {
            name: "Kassa Hərəkətləri",
            link: "/finance-and-installment/checkout-operations",
            isDropdown: false,
          },
        ]}
      />
      <div className="balance-div">
        <div className="card-1">
          <CashBoxCard
            name={holdingCashbox.holding ? holdingCashbox.holding.name : ""}
            totalBalance={holdingCashbox.balance}
          />
        </div>
        <Row className="balance-row">
          {/* <Col span={8}>
            <CashBoxCard 
            name={companyCashbox.company ? companyCashbox.company.name : ""}
            />
          </Col>
          <Col span={8}>
            <CashBoxCard />
          </Col>
          <Col span={8}>
            <CashBoxCard />
          </Col> */}
          {companyCashbox.map((v, i) => (
            <Col key={"company-cashbox" + v.id} span={8}>
              <CashBoxCard
                name={v.company ? v.company.name : ""}
                companyBalance={v.balance}
                totalBalance={v.offices_of_company_total_balance}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Balance;
