import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getRegionsAsync = createAsyncThunk('regions/getRegionsAsync', async ()=>{
    const res = await axios.get('users/region/');
    return res.data;
})


export const regionSlice = createSlice({
    name: "region",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getRegionsAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getRegionsAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results;
        },
        [getRegionsAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },    
    }
})

export default regionSlice.reducer;