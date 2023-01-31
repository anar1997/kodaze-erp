import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postBonusAddAsync = createAsyncThunk('bonusAddAsync', async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('salaries/bonus/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }   
})

export const bonusAddSlice = createSlice({
    name: "bonusAdd",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: {
        [postBonusAddAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postBonusAddAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postBonusAddAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default bonusAddSlice.reducer;