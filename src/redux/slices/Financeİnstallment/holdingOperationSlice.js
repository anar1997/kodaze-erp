import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postHoldingOperationAsync = createAsyncThunk('holdingOperationsAsync', async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('cashbox/holding-cashbox-operation/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)        
    }
})

export const holdingOperationSlice = createSlice({
    name: 'holdingOperation',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: {
        [postHoldingOperationAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postHoldingOperationAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.success = action.payload.detail
            state.error = null
        },
        [postHoldingOperationAsync.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload.detail;
            state.success = null;
        }
    }
})

export default holdingOperationSlice.reducer;