import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postAdvanceAddAsync = createAsyncThunk('advanceAddAsync', async (data)=>{
    const res = await axios.post('salaries/advancepayment/', data)
    return res.data
})

export const advanceAddSlice = createSlice({
    name: "advanceAdd",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [postAdvanceAddAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postAdvanceAddAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
        },
        [postAdvanceAddAsync.rejected]: (state, action)=>{
            console.log(action);    
        }
    }
})