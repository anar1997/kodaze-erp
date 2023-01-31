import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getCompanyCashboxAsync = createAsyncThunk('getCompanyCashboxAsync', async(offset)=>{
    const res = await axios.get(`cashbox/company-cashbox/`)
    return res.data
})

export const companyCashboxSlice = createSlice({
    name: 'companyCashboxAsync',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: {
        [getCompanyCashboxAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCompanyCashboxAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload.results);
            state.data = action.payload.results[0].data
        },
        [getCompanyCashboxAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default companyCashboxSlice.reducer