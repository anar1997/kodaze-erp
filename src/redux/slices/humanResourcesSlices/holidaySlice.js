import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";


export const postHolidayAsync = createAsyncThunk('postHolidayAsync', async (data)=>{
    const res = await axios.post('holidays/holiday-operation/', data)
    return res.data;
})


export const holidaySlice = createSlice({
    name: 'holiday',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    }, 
    reducers: {},
    extraReducers: {
        [postHolidayAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postHolidayAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            console.log("yerine yetirildi");
        },
        [postHolidayAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = "melumatlar dogru deyil";
            console.log(action);
        }
    }
})

export default holidaySlice.reducer;