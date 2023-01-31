import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getPaymentTrackingAsync = createAsyncThunk('paymentTracking', async (offset)=>{
    const res = await axios.get(`contract/installments/?limit=20&offset=${offset}`)
    return res.data
})

export const filterPaymentTrackingAsync = createAsyncThunk('filterPaymentTracking', async (values)=>{
    const res = await axios.get(`contract/installments/?limit=20&offset=${values.offset}&contract__office=${values.office}&contract__company=${values.company}&contract__customer__fullname=${values.customer}&contract__customer__region=${values.region}&payment_status=${values.paymentStatus}&date__gte=${values.dateGte}&date__lte=${values.dateLte}`)
    return res.data
})

export const paymentTrackingSlice = createSlice({
    name: 'paymentTracking',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        totalPage: 0,
        pageLimit: 20
    },
    reducers: {},
    extraReducers: {
        [getPaymentTrackingAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getPaymentTrackingAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            console.log(action.payload.results)
            // state.totalPage = action.payload.count
        },
        [getPaymentTrackingAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterPaymentTrackingAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterPaymentTrackingAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            state.totalPage = action.payload.count
        },
        [filterPaymentTrackingAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default paymentTrackingSlice.reducer;