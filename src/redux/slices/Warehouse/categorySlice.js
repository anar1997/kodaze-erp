import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getCategoryAsync = createAsyncThunk('getCategoryAsync', async(offset)=>{
    const res = await axios.get(`product/categories/`)
    return res.data
})

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
    },
    reducers: {},
    extraReducers: {
        [getCategoryAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCategoryAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.data = action.payload.results
        },
        [getCategoryAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default categorySlice.reducer