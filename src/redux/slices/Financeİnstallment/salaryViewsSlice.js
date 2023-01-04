import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getSalaryViewsAsync = createAsyncThunk('salaryViews', async (offset)=>{
    const res = await axios.get(`salaries/salary-views/?limit=20&offset=${offset}`)
    return res.data
})

export const salaryViewsSlice = createSlice({
    name: "salaryViews",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        totalPage: 0,
        pageLimit: 20
    },
    reducers: {},
    extraReducers: {
        [getSalaryViewsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getSalaryViewsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            console.log(action.payload.results);
            state.totalPage = action.payload.count
        },
        [getSalaryViewsAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        }
    }
})

export default salaryViewsSlice.reducer;