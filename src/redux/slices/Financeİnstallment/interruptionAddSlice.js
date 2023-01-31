import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postInterruptionAddAsync = createAsyncThunk('interruptionAdd', async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('salaries/salary-deduction/', data)
        return res.data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
    
})

export const interruptionAddSlice = createSlice({
    name: "interruptionAdd",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
    },
    reducers: {},
    extraReducers: {
        [postInterruptionAddAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postInterruptionAddAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postInterruptionAddAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default interruptionAddSlice.reducer