import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getUsersAsync = createAsyncThunk('user/userAsync', async ()=>{
    const res = await axios.get('users/?is_superuser=false&is_active=true');
    return res.data;
})

export const postUserAsync = createAsyncThunk('user/postUserAsync', async (data)=>{
    const res = await axios.post('users/register/', data, {headers: {
        "Content-Type": "multipart/form-data"}})
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isCompany: true,
        isLoading: false,
        error: null,
        message: ""
    },
    reducers: {},
    extraReducers: {
        [getUsersAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getUsersAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.users = action.payload.results;
        },
        [getUsersAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },
        [postUserAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postUserAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            // state.message =
            console.log(state.payload);
        },
        [postUserAsync.rejected]: (state, action)=>{
            console.log(action);
        }         
    }
})


export default userSlice.reducer;