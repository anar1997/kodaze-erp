import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getHoldingCashboxAsync = createAsyncThunk('getHoldingCahboxAsync', async()=>{
    const res = await axios.get(`cashbox/holding-cashbox/`)
    return res.data
})

export const holdingCashboxSlice = createSlice({
    name: 'holdingCashboxAsync',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
    },
    reducers: {},
    extraReducers: {
        [getHoldingCashboxAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getHoldingCashboxAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload.results);
            state.data = action.payload.results[0].data
        },
        [getHoldingCashboxAsync]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default holdingCashboxSlice.reducer