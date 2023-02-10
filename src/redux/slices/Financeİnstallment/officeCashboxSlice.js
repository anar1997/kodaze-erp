import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getOfficeCashboxAsync = createAsyncThunk('getOfficeCashboxAsync', async(offset)=>{
    const res = await axios.get(`cashbox/office-cashbox/`)
    return res.data
})

export const officeCashboxSlice = createSlice({
    name: 'officeCashbox',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: {
        [getOfficeCashboxAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getOfficeCashboxAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
        },
        [getOfficeCashboxAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default officeCashboxSlice.reducer