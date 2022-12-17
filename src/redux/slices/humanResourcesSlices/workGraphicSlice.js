import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getWorkGraphicAsync = createAsyncThunk('workGraphic', async ()=>{
    const res = await axios.get('holidays/employee-working-days/')
    return res.data
})

export const workGraphicSlice = createSlice({
    name: "workGraphic",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getWorkGraphicAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getWorkGraphicAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
        },
        [getWorkGraphicAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        } 
    }
})

export default workGraphicSlice.reducer;