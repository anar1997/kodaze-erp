import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios";

export const getCompanyOfficeAsync = createAsyncThunk('getCompanyOffice', async (offset)=>{
    const res = await axios.get(`transfer/company-transfer/?limit=20&offset=${offset}`)
    return res.data
})

export const filterCompanyOfficeAsync = createAsyncThunk('filterCompanyTransfer', async (values)=>{
    const res = await axios.get(`transfer/company-transfer/?limit=20&offset=${values.offset}&executor__fullname=${values.executor}&company=${values.company}&company__name=&company__name__icontains=&sending_office__name=&sending_office__name__icontains=&receiving_office__name=&receiving_office__name__icontains=&sending_office=${values.sendingOffice}&receiving_office=${values.receivingOffice}&recipient_subsequent_balance=${values.recipientSubsequentBalance}&sender_subsequent_balance=${values.senderSubsequentBalance}&transfer_amount=${values.transferAmount}&transfer_amount__gte=&transfer_amount__lte=&transfer_note=${values.transferNote}&transfer_date=${values.transferDate}&transfer_date__gte=${values.dateGte}&transfer_date__lte=${values.dateLte}`)
    return res.data
})

export const postCompanyOfficeAsync = createAsyncThunk('postCompanyOffice', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('transfer/company-transfer/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)        
    }
})

export const companyOfficeSlice = createSlice({
    name: 'companyOffice',
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
        [getCompanyOfficeAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCompanyOfficeAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            console.log(action.payload.results);
        },
        [getCompanyOfficeAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterCompanyOfficeAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterCompanyOfficeAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterCompanyOfficeAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [postCompanyOfficeAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postCompanyOfficeAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postCompanyOfficeAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading = false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default companyOfficeSlice.reducer;