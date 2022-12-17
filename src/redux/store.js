import { configureStore } from "@reduxjs/toolkit";
import  commissionSlice  from "./slices/humanResourcesSlices/commissionSlice";
import companySlice from "./slices/humanResourcesSlices/companySlice";
import departamentSlice from "./slices/humanResourcesSlices/departamentSlice";
import officeSlice from "./slices/humanResourcesSlices/officeSlice";
import positionSlice from "./slices/humanResourcesSlices/positionSlice";
import regionSlice from "./slices/humanResourcesSlices/regionSlice";
import userSlice from "./slices/humanResourcesSlices/userSlice";
import workGraphicSlice from "./slices/humanResourcesSlices/workGraphicSlice";


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
    }
})