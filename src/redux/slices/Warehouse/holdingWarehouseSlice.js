import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getHoldingWarehouseAsync = createAsyncThunk('getHoldingWarehouseAsync', async(offset)=>{
    const res = await axios.get(`warehouse/holding-warehouse/`)
    return res.data
})

export const postProductAsync = createAsyncThunk('postProductAync', async(data)=>{
    const res = await axios.post('/warehouse/product-add-to-holding-warehouse/', data, {headers: {
        "Content-Type": "multipart/form-data"}})
    return res.data
})

export const filterHoldingWarehouseAsync = createAsyncThunk('filterHoldingWarehouseAsync', async(values)=>{
    const res = await axios.get(`warehouse/holding-warehouse/?limit=20&offset=${values.offset}&product=${values.product}&product__product_name=&product__product_name__icontains=&product__barcode=${values.barcode}&product__barcode__icontains=&quantity=&useful_product_count=&unuseful_product_count=`)
    return res.data
})

export const holdingWarehouseSlice = createSlice({
    name: 'warehouse/holding-warehouse',
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
        [getHoldingWarehouseAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getHoldingWarehouseAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [getHoldingWarehouseAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [postProductAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postProductAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
        },
        [postProductAsync.rejected]: (state, action)=>{
            console.log(action);
        },
        [filterHoldingWarehouseAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterHoldingWarehouseAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterHoldingWarehouseAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default holdingWarehouseSlice.reducer

