import { configureStore } from "@reduxjs/toolkit";
import advanceAddSlice from "./slices/Financeİnstallment/advanceAddSlice";
import bonusAddSlice  from "./slices/Financeİnstallment/bonusAddSlice";
import checkoutOperationsSlice from "./slices/Financeİnstallment/checkoutOperationsSlice";
import companyCashboxSlice from "./slices/Financeİnstallment/companyCashboxSlice";
import companyOperationSlice from "./slices/Financeİnstallment/companyOperationSlice";
import fineAddSlice from "./slices/Financeİnstallment/fineAddSlice";
import holdingCashboxSlice from "./slices/Financeİnstallment/holdingCashboxSlice";
import holdingOperationSlice from "./slices/Financeİnstallment/holdingOperationSlice";
import interruptionAddSlice from "./slices/Financeİnstallment/interruptionAddSlice";
import officeCashboxSlice from "./slices/Financeİnstallment/officeCashboxSlice";
import paymentTrackingSlice from "./slices/Financeİnstallment/paymentTrackingSlice";
import paySalarySlice from "./slices/Financeİnstallment/paySalarySlice";
import salaryViewsSlice from "./slices/Financeİnstallment/salaryViewsSlice";
import companyOfficeSlice from "./slices/Financeİnstallment/Transfer/companyOfficeSlice";
import  holdingCompanySlice  from "./slices/Financeİnstallment/Transfer/holdingCompanySlice";
import officesSlice from "./slices/Financeİnstallment/Transfer/officesSlice";
import  commissionSlice  from "./slices/humanResourcesSlices/commissionSlice";
import companySlice from "./slices/humanResourcesSlices/companySlice";
import departamentSlice from "./slices/humanResourcesSlices/departamentSlice";
import holidaySlice from "./slices/humanResourcesSlices/holidaySlice";
import monthRangeSlice from "./slices/humanResourcesSlices/monthRangeSlice";
import officeSlice from "./slices/humanResourcesSlices/officeSlice";
import permissionSlice from "./slices/humanResourcesSlices/permissionSlice";
import positionSlice from "./slices/humanResourcesSlices/positionSlice";
import regionSlice from "./slices/humanResourcesSlices/regionSlice";
import userSlice from "./slices/humanResourcesSlices/userSlice";
import workGraphicSlice from "./slices/humanResourcesSlices/workGraphicSlice";
import loginSlice from "./slices/loginSlice";
import categorySlice  from "./slices/Warehouse/categorySlice";
import holdingWarehouseSlice from "./slices/Warehouse/holdingWarehouseSlice";
import stokSlice from "./slices/Warehouse/stokSlice";
import unitOfMeasureSlice  from "./slices/Warehouse/unitOfMeasureSlice";
import warehouseSlice from "./slices/Warehouse/warehouseSlice";
import wareRequestsSlice from "./slices/Warehouse/wareRequestsSlice";


export default configureStore({
    reducer: {
        users: userSlice,
        workGraphic: workGraphicSlice,
        commission: commissionSlice,   
        company: companySlice,
        departament: departamentSlice,
        office: officeSlice,
        position: positionSlice,
        region: regionSlice,
        monthRange: monthRangeSlice,
        holiday: holidaySlice,
        permission: permissionSlice,
        salaryView: salaryViewsSlice,
        login: loginSlice,
        holdingCompany: holdingCompanySlice,
        companyOffice: companyOfficeSlice,
        offices: officesSlice,
        paymentTracking: paymentTrackingSlice,
        checkoutOperations: checkoutOperationsSlice,
        advanceAdd: advanceAddSlice,
        bonusAdd: bonusAddSlice,
        fineAdd: fineAddSlice,
        interruptionAdd: interruptionAddSlice,
        paySalary: paySalarySlice,
        companyOperation: companyOperationSlice,
        holdingOperation: holdingOperationSlice,
        holdingCashbox: holdingCashboxSlice,
        companyCashbox: companyCashboxSlice,
        officeCashbox: officeCashboxSlice,
        warehouse: warehouseSlice,
        holdingWarehouse: holdingWarehouseSlice,
        stok: stokSlice,
        wareRequests: wareRequestsSlice,
        unitOfMeasure: unitOfMeasureSlice,
        category: categorySlice,
    }
})