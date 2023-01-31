import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postFineAddAsync = createAsyncThunk('fineAdd', async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('salaries/salary-punishment/', data)
        return res.data 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }    
})

export const fineAddSlice = createSlice({
    name: 'fineAdd',
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
        [postFineAddAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postFineAddAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postFineAddAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default fineAddSlice.reducer