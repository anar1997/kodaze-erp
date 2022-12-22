import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postPermissionAsync = createAsyncThunk('postPermissionAsync', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('holidays/employee-day-off-operation/', data)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const permissionSlice = createSlice({
    name: 'holiday',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        successMessage: null,
    }, 
    reducers: {},
    extraReducers: {
        [postPermissionAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postPermissionAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log("yerine yetirildi");
            state.successMessage = action.payload.detail;
            state.error = null;
        },
        [postPermissionAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading=false
            state.error=action.payload.detail
            state.successMessage=null;
        }
    }
})

export default permissionSlice.reducer;