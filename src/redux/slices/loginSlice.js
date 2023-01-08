import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const postLoginAsync = createAsyncThunk('loginAsync', async (data)=>{
    const res = await axios.post('users/login/', data)
    return res.data
         
})

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: "",
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [postLoginAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postLoginAsync.fulfilled]: (state, action)=>{
            console.log(action);
            localStorage.setItem("access", action.payload.access)
            state.data = action.payload.user_details;
        },
        [postLoginAsync.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = "İstifadəçi tapılmadı."
        }
    }
})

export default loginSlice.reducer;