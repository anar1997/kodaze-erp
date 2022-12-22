import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";


export const postHolidayAsync = createAsyncThunk('postHolidayAsync', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('holidays/holiday-operation/', data)
        return res.data;
    } catch (error) {
        return  rejectWithValue(error.response.data)
    }
})


export const holidaySlice = createSlice({
    name: 'holiday',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        successMessage: null,
    }, 
    reducers: {},
    extraReducers: {
        [postHolidayAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postHolidayAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log("yerine yetirildi");
            state.successMessage = action.payload.detail
            state.error = null
            console.log(action);
        },
        [postHolidayAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = action.payload.detail;
            state.successMessage = null;
            console.log(action);
        }
    }
})

export default holidaySlice.reducer;