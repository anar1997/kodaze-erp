import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios";

export const getOfficesAsync = createAsyncThunk('getOfficesTransfer', async (offset)=>{
    const res = await axios.get(`transfer/office-transfer/?limit=20&offset=${offset}`)
    return res.data
})

export const filterOfficesAsync = createAsyncThunk('filterOfficesTransfer', async (values)=>{
    const res = await axios.get(`transfer/office-transfer/?limit=20&offset=${values.offset}&executor__fullname=${values.executor}&company=${values.company}&company__name=&company__name__icontains=&sending_office__name=&sending_office__name__icontains=&receiving_office__name=&receiving_office__name__icontains=&sending_office=${values.sendingOffice}&receiving_office=${values.receivingOffice}&recipient_subsequent_balance=${values.recipientSubsequentBalance}&sender_subsequent_balance=${values.senderSubsequentBalance}&transfer_amount=${values.transferAmount}&transfer_amount__gte=&transfer_amount__lte=&transfer_note=${values.transferNote}&transfer_date=${values.transferDate}&transfer_date__gte=${values.dateGte}&transfer_date__lte=${values.dateLte}`)
    return res.data
})

export const postOfficesAsync = createAsyncThunk('postOfficesTransfer', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('transfer/office-transfer/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const officesSlice = createSlice({
    name: 'officesSlice',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        success: null,
        totalPage: 0,
        pageLimit: 20
    },
    reducers: {},
    extraReducers: {
        [getOfficesAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getOfficesAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            console.log(action.payload.results);
        },
        [getOfficesAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        }, 
        [filterOfficesAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterOfficesAsync.fulfilled]: (state, action)=>{
            state.isLoading=false
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterOfficesAsync.rejeted]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [postOfficesAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postOfficesAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postOfficesAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading=false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default officesSlice.reducer;