import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postCompanyOperationAsync = createAsyncThunk('companyOperationAsync', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('cashbox/company-cashbox-operation/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)        
    }
})

export const companyOperationSlice = createSlice({
    name: 'companyOperation',
    initialState: {
        data: [],
        isLoading: false,
        error: null, 
        success: null
    },
    reducers: {},
    extraReducers: {
        [postCompanyOperationAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postCompanyOperationAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.success = action.payload.detail
            state.error = null
        },
        [postCompanyOperationAsync.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload.detail;
            state.success = null;
        }
    }
})

export default companyOperationSlice.reducer;