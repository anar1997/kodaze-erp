import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const usersAsync = createAsyncThunk('user/userAsync', async ()=>{
    const res = await axios.get('users/?is_superuser=false&is_active=true');
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [usersAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [usersAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.users = action.payload.results;
            console.log("slicedaki users==>"+state.users)
        },
        [usersAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        }
    }
})

export default userSlice.reducer;