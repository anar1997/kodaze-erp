import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getDepartamentAsync = createAsyncThunk('regions/getDepartamentAsync', async ()=>{
    const res = await axios.get('company/departments/?is_active=true');
    return res.data;
})


export const departamentSlice = createSlice({
    name: "region",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getDepartamentAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getDepartamentAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results;
        },
        [getDepartamentAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },    
    }
})

export default departamentSlice.reducer;