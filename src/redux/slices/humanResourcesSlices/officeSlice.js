import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";


export const getOfficeAsync = createAsyncThunk('office/getOfficeAsync', async ()=>{
    const res = await axios.get('company/offices/?is_active=true');
    return res.data;
})

export const filterOfficesAsync = createAsyncThunk('office/filterOfficeAsync', async(values)=>{
    const res = await axios.get(`company/offices/?name=${values.name}&company=${values.company}&is_active=true&employee_count=${values.employee_count}`)
    return res.data
})


export const officeSlice = createSlice({
    name: "region",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getOfficeAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getOfficeAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results;
        },
        [getOfficeAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },    
        [filterOfficesAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterOfficesAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
        },
        [filterOfficesAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default officeSlice.reducer;