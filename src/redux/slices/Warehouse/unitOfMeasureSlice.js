import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getUnitOfMeasureAsync = createAsyncThunk('getUnitOfMeasureAsync', async(offset)=>{
    const res = await axios.get(`product/unit-of-measure/`)
    return res.data
})

export const unitOfMeasureSlice = createSlice({
    name: "unitOfMeasure",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
    },
    reducers: {},
    extraReducers: {
        [getUnitOfMeasureAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getUnitOfMeasureAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
        },
        [getUnitOfMeasureAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default unitOfMeasureSlice.reducer