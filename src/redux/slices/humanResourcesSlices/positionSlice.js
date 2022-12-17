import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";


export const getPositionAsync = createAsyncThunk('regions/getPositionAsync', async ()=>{
    const res = await axios.get('company/positions/?is_active=true');
    return res.data;
})


export const positionSlice = createSlice({
    name: "region",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getPositionAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getPositionAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results;
        },
        [getPositionAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },    
    }
})

export default positionSlice.reducer;