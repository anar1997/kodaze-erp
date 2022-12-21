import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postPermissionAsync = createAsyncThunk('postPermissionAsync', async (data)=>{
    const res = await axios.post('holidays/employee-day-off-operation/', data)
    return res.data;
})


export const permissionSlice = createSlice({
    name: 'holiday',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    }, 
    reducers: {},
    extraReducers: {
        [postPermissionAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postPermissionAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(state.payload);
            console.log("yerine yetirildi");
        },
        [postPermissionAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }
    }
})

export default permissionSlice.reducer;