import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getWarehouseAsync = createAsyncThunk('getWarehouseAsync', async(offset)=>{
    const res = await axios.get(`warehouse/`)
    return res.data
})

export const filterWarehouseAsync = createAsyncThunk('filterWarehouseAsync', async(values)=>{
    const res = await axios.get(`warehouse/?limit=20&offset=${values.offset}&name=${values.name}&office=${values.office}&company=${values.company}`)
    return res.data
})

export const warehouseSlice = createSlice({
    name: 'warehouse',
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
        [getWarehouseAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getWarehouseAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
            state.totalPage = action.payload.count
        },
        [getWarehouseAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterWarehouseAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterWarehouseAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
            state.totalPage = action.payload.count
        },
        [filterWarehouseAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default warehouseSlice.reducer;