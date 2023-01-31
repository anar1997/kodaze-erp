import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getCheckoutOperationsAsync = createAsyncThunk('checkoutOperations', async (offset)=>{
    const res = await axios.get(`cashbox/cashflow/?limit=20&offset=${offset}`)
    return res.data
})

export const filterCheckoutOperationsAsync = createAsyncThunk('filterCheckoutOperations', async (values)=>{
    const res = await axios.get(`cashbox/cashflow/?limit=20&offset=${values.offset}&executor=${values.executor}&&office=${values.office}&company=${values.company}&personal=${values.personal}&customer=${values.customer}&description__icontains=${values.description}&date__gte=${values.dateGte}&date__lte=${values.dateLte}`)
    return res.data
})

export const checkoutOperationsSlice = createSlice({
    name: 'checkoutOperations',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        totalPage: 0,
        pageLimit: 20
    },
     reducers: {},
     extraReducers: {
        [getCheckoutOperationsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCheckoutOperationsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            console.log(action.payload.results);
        },
        [getCheckoutOperationsAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }, 
        [filterCheckoutOperationsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterCheckoutOperationsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            state.totalPage = action.payload.count
        },
        [filterCheckoutOperationsAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
     }
})

export default checkoutOperationsSlice.reducer;