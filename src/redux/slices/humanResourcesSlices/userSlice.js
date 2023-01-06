import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getUsersAsync = createAsyncThunk('user/userAsync', async (offset)=>{
    const res = await axios.get(`users/?limit=20&offset=${offset}&is_superuser=false&is_active=true`);
    return res.data;
})

export const postUserAsync = createAsyncThunk('user/postUserAsync', async (data)=>{
    const res = await axios.post('users/register/', data, {headers: {
        "Content-Type": "multipart/form-data"}})
    return res.data;
})

export let filterUserAsync = createAsyncThunk('user/filterAsync', async (values)=>{
    let holding = values.holding
    console.log(holding)
    let registerType = "";
    if(holding===true){
        registerType = "Holding"
    }
    const res = await axios.get(`users/?limit=20&offset=${values.offset}&is_superuser=false&is_active=true&register_type=${registerType}&fullname=${values.fullname}&company=${values.company}&office=${values.office}&departament=${values.departament}&position=${values.position}&salary_style=${values.salary_style}`);
    return res.data;
})
export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isCompany: true,
        isLoading: false,
        error: null,
        message: "",    
        totalPage: 0,
        pageLimit: 20,
    },
    reducers: {},
    extraReducers: {
        [getUsersAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getUsersAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.users = action.payload.results;
            state.totalPage = action.payload.count;
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
        },
        [filterUserAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterUserAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.users = action.payload.results;
            state.totalPage = action.payload.count;
        },
        [filterUserAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },         
    }
})


export default userSlice.reducer;