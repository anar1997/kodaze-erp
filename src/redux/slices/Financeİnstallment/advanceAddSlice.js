import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postAdvanceAddAsync = createAsyncThunk('advanceAddAsync', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('salaries/advancepayment/', data)
        return res.data
    } catch (error) {
        return  rejectWithValue(error.response.data)
    }
})

export const advanceAddSlice = createSlice({
    name: "advanceAdd",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: {
        [postAdvanceAddAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postAdvanceAddAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postAdvanceAddAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi'); 
            state.isLoading = false
            state.error = action.payload.detail;
            state.success = null;
        }
    }
})

export default advanceAddSlice.reducer;