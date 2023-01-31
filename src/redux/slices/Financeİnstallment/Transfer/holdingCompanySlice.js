import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios";

export const getHoldingCompanyAsync = createAsyncThunk('getHoldingTransfer', async (offset)=>{
    const res = await axios.get(`transfer/holding-transfer/?limit=20&offset=${offset}`)
    return res.data
})

export const postHoldingCompanyAsync = createAsyncThunk('postHoldingTransfer', async (data, {rejectWithValue})=>{
    try {
        const res = await axios.post('transfer/holding-transfer/', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const filterHoldingCompanyAsync = createAsyncThunk('filterHoldingTransfer', async (values)=>{
    const res = await axios.get(`transfer/holding-transfer/?limit=20&offset=${values.offset}&executor__fullname=${values.executor}&sending_company=${values.sendingCompany}&receiving_company=${values.receivingCompany}&recipient_subsequent_balance=${values.recipientSubsequentBalance}&sender_subsequent_balance=${values.senderSubsequentBalance}&transfer_amount=${values.transferAmount}&transfer_amount__gte=&transfer_amount__lte=&transfer_note=${values.transferNote}&transfer_date=${values.transferDate}&transfer_date__gte=${values.dateGte}&transfer_date__lte=${values.dateLte}`)
    return res.data
})
    
export const holdingCompanySlice = createSlice({
    name: 'holdingTransfer',
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
        [getHoldingCompanyAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getHoldingCompanyAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            console.log(action.payload.results);

        },
        [getHoldingCompanyAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [filterHoldingCompanyAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [filterHoldingCompanyAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload.results.data
            state.totalPage = action.payload.count
        },
        [filterHoldingCompanyAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
        },
        [postHoldingCompanyAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postHoldingCompanyAsync.fulfilled]: (state, action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.success = action.payload.detail
            state.error = null
        },
        [postHoldingCompanyAsync.rejected]: (state, action)=>{
            console.log('xeta cixdi');
            state.isLoading=false
            state.error = action.payload.detail
            state.success = null
        }
    }
})

export default holdingCompanySlice.reducer;