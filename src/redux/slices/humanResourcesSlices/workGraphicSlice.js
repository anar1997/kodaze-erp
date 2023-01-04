import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const getWorkGraphicAsync = createAsyncThunk('workGraphic', async (offset)=>{
    const res = await axios.get(`holidays/employee-working-days/?limit=20&offset=${offset}`)
    return res.data
})

export const filterWorkGraphicAsync = createAsyncThunk('filterWorkGraphic', async (values)=>{
    let holding = values.holding
    let registerType = ""
    if(holding==true){
        registerType = "Holding"
    }
    const res = await axios.get(`holidays/employee-working-days/?limit=20&offset=${values.offset}&employee__fullname=${values.fullname}&employee__company=${values.company}&employee__office=${values.office}&employee__position=${values.position}&employee__register_type=${registerType}&date__gte=${values.dateGte}&date__lte=${values.dateLte}`)
    return res.data
})

export const workGraphicSlice = createSlice({
    name: "workGraphic",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        totalPage: 0,
        pageLimit: 20,
    },
    reducers: {},
    extraReducers: {
        [getWorkGraphicAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getWorkGraphicAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            state.totalPage = action.payload.count
        },
        [getWorkGraphicAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        },
        [filterWorkGraphicAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterWorkGraphicAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results[0].data
            state.totalPage = action.payload.count
        },
        [filterWorkGraphicAsync.rejected]: (state, action)=>{
            console.log("xeta cixdi");
        } 

    }
})

export default workGraphicSlice.reducer;