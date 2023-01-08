import { configureStore } from "@reduxjs/toolkit";
import salaryViewsSlice from "./slices/Financeİnstallment/salaryViewsSlice";
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
    }
})