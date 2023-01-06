import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getSalaryViewsAsync = createAsyncThunk('salaryViews', async (offset)=>{
    const res = await axios.get(`salaries/salary-views/?limit=20&offset=${offset}`)
    return res.data
})

export const filterSalaryViewsAsync = createAsyncThunk('filterSalaryViews', async(values)=>{
    const res = await axios.get(`salaries/salary-views/?limit=20&offset=${values.offset}&employee__fullname=${values.fullname}&employee__salary_style=${values.salaryStyle}&employee__is_active=${values.isActive}&employee__office=${values.office}&employee__company=${values.company}&employee__position=${values.position}&sale_quantity=${values.saleQuantity}&date__gte=${values.dateGte}&date__lte=${values.dateLte}`)
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
        },
        [filterSalaryViewsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterSalaryViewsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterSalaryViewsAsync.rejected]: (state, action) =>{
            console.log('xeta cixdi');
        }
    }
})

export default salaryViewsSlice.reducer;