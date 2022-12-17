import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getCompanyAsync = createAsyncThunk('regions/getCompanyAsync', async ()=>{
    const res = await axios.get('company/?is_active=true');
    return res.data;
})


export const companySlice = createSlice({
    name: "region",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getCompanyAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCompanyAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results;
        },
        [getCompanyAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },    
    }
})

export default companySlice.reducer;