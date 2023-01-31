import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "./style.css";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import CRM from "../CRM";
import FinanceAndInstallment from "../FinanceAndInstallment";
import HomePage from "../HomePage";
import HumanResources from "../HumanResources";
import Service from "../Service";
import Statistics from "../Statistics";
import Tasks from "../tasks";
import Warehouse from "../Warehouse";
import { FaHome, FaWarehouse, FaTasks } from "react-icons/fa";
import {
  IoPeopleCircleOutline,
  IoBookmarks,
  IoCalculatorOutline,
  IoCellularSharp,
  IoCloseOutline,
} from "react-icons/io5";
import { IoMdBuild } from "react-icons/io";
import logo from "../../assets/a1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import WorkerAdd from "../../component/HumanResources/WorkerAdd";
import WorkerDetail from "../../component/HumanResources/WorkerDetail";
import HumanTable from "../../component/HumanResources/HumanTable";
import Commisions from "../../component/HumanResources/Commissions";
import CommissionAdd from "../../component/HumanResources/CommissionAdd";
import HolidayAdd from "../../component/HumanResources/HolidayAdd";
import PermissionAdd from "../../component/HumanResources/PermissionAdd";
import AdvanceAdd from "../../component/FinanceComp/Salary/AdvanceAdd";
import BonusAdd from "../../component/FinanceComp/Salary/BonusAdd";
import FineAdd from "../../component/FinanceComp/Salary/FineAdd";
import InterruptionAdd from "../../component/FinanceComp/Salary/InterruptionAdd";
import PaySalary from "../../component/FinanceComp/Salary/PaySalary";
// import { useSelector } from "react-redux";
import LoginPage from "../Login";
import Balance from "../../component/FinanceComp/Balance";
import PaymentTracking from "../../component/FinanceComp/PaymentTracking";
import CheckoutOperations from "../../component/FinanceComp/CheckoutOperations";
import CompanyOperation from "../../component/FinanceComp/CheckoutOperations/CompanyOperation";
import HoldingOperation from "../../component/FinanceComp/CheckoutOperations/HoldingOperation";
import HoldingCompany from "../../component/FinanceComp/Transfer/HoldingCompany";
import Offices from "../../component/FinanceComp/Transfer/Offices";
import CompanyOffice from "../../component/FinanceComp/Transfer/CompanyOffice";
import TransferedCompany from "../../component/FinanceComp/Transfer/TransferedCompany";
import TransferedOffice from "../../component/FinanceComp/Transfer/TransferedOffice";
import TransferedOffices from "../../component/FinanceComp/Transfer/TransferedOffices";
import OceanBalance from "../../component/FinanceComp/Balance/OceanBalance";
const { Content, Sider } = Layout;

const Main = () => {
  const location = useLocation();
  let { pathname } = location;
  const [collapsed, setCollapsed] = useState(false);

  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const isLogin = localStorage.getItem("access");

  return (
    <>
      {isLogin != null ? (
        <Layout>
          <Sider
            width={250}
            style={{ backgroundColor: "#073763", position: "sticky" }}
            className="main-sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div
              className={collapsed ? "main-hamburger-closed" : "main-hamburger"}
            >
              {React.createElement(
                collapsed ? IoCloseOutline : RxHamburgerMenu,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>
            {collapsed ? (
              <img
                src={logo}
                className="main-logo"
                style={{ display: "none" }}
                alt="main-logo"
              />
            ) : (
              <img src={logo} className="main-logo" alt="main-logo-2" />
            )}

            <Menu
              style={{ backgroundColor: "#073763" }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname]}
              items={[
                {
                  key: "/",
                  icon: (
                    <FaHome
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/">
                      Ana Səhifə
                    </Link>
                  ),
                },
                {
                  key: "/human-resources",
                  icon: (
                    <IoPeopleCircleOutline
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/human-resources">
                      İnsan Resursları
                    </Link>
                  ),
                },
                {
                  key: "/crm",
                  icon: (
                    <IoBookmarks
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/crm">
                      CRM
                    </Link>
                  ),
                },
                {
                  key: "/finance-and-installment",
                  icon: (
                    <IoCalculatorOutline
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/finance-and-installment">
                      Maliyyə və Kredit
                    </Link>
                  ),
                },
                {
                  key: "/warehouse",
                  icon: (
                    <FaWarehouse
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/warehouse">
                      Anbar
                    </Link>
                  ),
                },
                {
                  key: "/statistics",
                  icon: (
                    <IoCellularSharp
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/statistics">
                      Statistika
                    </Link>
                  ),
                },
                {
                  key: "/tasks",
                  icon: (
                    <FaTasks
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/tasks">
                      Tapşırıqlar
                    </Link>
                  ),
                },
                {
                  key: "/service",
                  icon: (
                    <IoMdBuild
                      className={collapsed ? "main-icon-closed" : "main-icon"}
                    />
                  ),
                  label: (
                    <Link className="main-link" to="/service">
                      Servis
                    </Link>
                  ),
                },
              ]}
            />
          </Sider>
          <Layout>
            {/* <PageHeader name="Ana Səhifə"/> */}
            <Content className="content">
              {/* <BrowserRouter> */}
              <Routes>
                <Route path="human-resources" element={<Outlet />}>
                  <Route path="" element={<HumanResources />} />
                  <Route path="register" element={<WorkerAdd />} />
                  <Route path="worker-detail" element={<WorkerDetail />} />
                  <Route path="work-graphic" element={<Outlet />}>
                    <Route path="" element={<HumanTable />} />
                    <Route path="holiday-add" element={<HolidayAdd />} />
                    <Route path="permission-add" element={<PermissionAdd />} />
                  </Route>
                  <Route path="commissions" element={<Outlet />}>
                    <Route path="" element={<Commisions />} />
                    <Route path="commission-add" element={<CommissionAdd />} />
                  </Route>
                </Route>
                <Route path="crm" element={<CRM />} />
                <Route path="finance-and-installment" element={<Outlet />}>
                  <Route path="" element={<FinanceAndInstallment />} />
                  <Route path="advance-add" element={<AdvanceAdd />} />
                  <Route path="bonus-add" element={<BonusAdd />} />
                  <Route path="fine-add" element={<FineAdd />} />
                  <Route
                    path="interruption-add"
                    element={<InterruptionAdd />}
                  />
                  <Route path="pay-salary" element={<PaySalary />} />
                  <Route path="balance" element={<Outlet />}>
                    <Route path="" element={<Balance />}/>
                    <Route path="ocean-balance" element={<OceanBalance/>}/>
                  </Route>
                  <Route path="payment-tracking" element={<PaymentTracking/>}/>
                  <Route path="checkout-operations">
                    <Route path="" element={<CheckoutOperations/>}/>
                    <Route path="company-operation" element={<CompanyOperation/>}/>
                    <Route path="holding-operation" element={<HoldingOperation/>}/>
                  </Route>
                  <Route path="holding-company-transfer" element={<Outlet/>}>
                    <Route path="" element={<HoldingCompany/>}/>
                    <Route path="transfered-company" element={<TransferedCompany/>}/>
                  </Route>
                  <Route path="offices-transfer" element={<Outlet/>}>
                    <Route path="" element={<Offices/>}/>
                    <Route path="transfered-offices" element={<TransferedOffices/>}/>
                  </Route>
                  <Route path="company-office-transfer" element={<Outlet/>}>
                    <Route path="" element={<CompanyOffice/>}/>
                    <Route path="transfered-office" element={<TransferedOffice/>}/>
                  </Route>
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="service" element={<Service />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="warehouse" element={<Warehouse />} />
                <Route path="login" element={<LoginPage />} />
              </Routes>
              {/* </BrowserRouter> */}
            </Content>
          </Layout>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </>
  );
};
export default Main;
