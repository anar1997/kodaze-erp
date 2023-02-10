import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getStokAsync = createAsyncThunk('getStokAsync', async(offset)=>{
    const res = await axios.get(`warehouse/stocks/`)
    return res.data
})

export const filterStokAsync = createAsyncThunk('filterStokAsync', async(values)=>{
    const res = await axios.get(`warehouse/stocks/?limit=20&offset=${values.offset}&product=${values.product}&product__product_name=&product__product_name__icontains=&product__price=&product__price__gte=&product__price__lte=&product__barcode=${values.barcode}&product__barcode__gte=&product__barcode__lte=&warehouse__company=${values.company}&warehouse__office=&warehouse=${values.warehouse}&product__is_gift=unknown`)
    return res.data
})


export const stokSlice = createSlice({
    name: 'warehouse/stocks/',
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
        [getStokAsync.pending]: (state, action)=>{
            state.isLoading=true
        },
        [getStokAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [getStokAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterStokAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterStokAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterStokAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default stokSlice.reducer;