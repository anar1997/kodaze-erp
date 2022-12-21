import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getMonthRangeAsync = createAsyncThunk('getMonthRangeAsync', async ()=>{
    const res = await axios.get('salaries/month-range/')
    return res.data
})


export const monthRangeSlice = createSlice({
    name: 'commission',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    }, 
    reducers: {},
    extraReducers: {
        [getMonthRangeAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getMonthRangeAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
            // console.log(action.payload.results);
        },
        [getMonthRangeAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
    }
})

export default monthRangeSlice.reducer;