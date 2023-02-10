import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getWareRequestsAsync = createAsyncThunk('getWareRequestsAsync', async(offset)=>{
    const res = await axios.get(`warehouse/warehouse-requests/`)
    return res.data
})

export const filterWareRequestsAsync = createAsyncThunk('filterWareRequestsAsync', async(values)=>{
    const res = await axios.get(`warehouse/warehouse-requests/?limit=20&offset=${values.offset}&warehouse__name=&note=&warehouse__office=${values.office}&warehouse__company=${values.company}&employee_who_sent_the_request=${values.employee_who_sent_the_request}&status=${values.status}&request_date__gte=${values.dateGte}&request_date__lte=${values.dateLte}`)
    return res.data
})

export const wareRequestsSlice = createSlice({
    name: 'wareRequests',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
        totalPage: 0,   
        pageLimit: 20
    },
    reducers: {},
    extraReducers: {
        [getWareRequestsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getWareRequestsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
            state.totalPage = action.payload.count
        },
        [getWareRequestsAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterWareRequestsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterWareRequestsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results
            state.totalPage = action.payload.count
        },
        [filterWareRequestsAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default wareRequestsSlice.reducer;