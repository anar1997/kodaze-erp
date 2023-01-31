import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postPaySalaryAsync = createAsyncThunk('paySalaryAsync', async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('salaries/pay-salary/', data)
    return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
    
})

export const paySalarySlice = createSlice({
    name: 'paySalary',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
    },
    reducers: {},
    extraReducers: {
        [postPaySalaryAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postPaySalaryAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postPaySalaryAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default paySalarySlice.reducer;