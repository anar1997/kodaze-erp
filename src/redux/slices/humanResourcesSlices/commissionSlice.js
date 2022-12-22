import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getCommissionAsync = createAsyncThunk('commissionAsync', async ()=>{
    const res = await axios.get('salaries/commission/')
    return res.data
})

export const postCommissionAsync = createAsyncThunk('postCommissionAsync', async (data)=>{
    const res = await axios.post('salaries/commission/', data)
    return res.data;
})

export const commissionSlice = createSlice({
    name: 'commission',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    }, 
    reducers: {},
    extraReducers: {
        [getCommissionAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCommissionAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results
        },
        [getCommissionAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [postCommissionAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postCommissionAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
        },
        [postCommissionAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default commissionSlice.reducer;