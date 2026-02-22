import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { collection, doc, getDocs } from "firebase/firestore";
import db from "../../config/firebase";

const initialState = {
    allProducts: [],
    isLoading: false,
    isSuccess: false,
    isError: false

}

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.allProducts = [],
                state.isLoading = true,
                state.isSuccess = false,
                state.isError = false
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.allProducts = action.payload,
                state.isLoading = false,
                state.isSuccess = true,
                state.isError = false
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.allProducts = [],
                state.isLoading = false,
                state.isSuccess = false,
                state.isError = true
        })
    }
})

export const fetchProduct = createAsyncThunk(
    'ProductSlice/fetch',
    async () => {
        // FAKE STORE API
        // const getusers = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(getusers)
        // return getusers.data

        // DATABASE WEB DATABASE
        // const docRef = collection(db, "NewTable")
        // const getdata = await getDocs(docRef)
 
        // const allData = getdata.docs.map(doc => ({
        //     id: doc.id,
        //    ...doc.data()
        // }))
        // console.log(allData)


    })


export default ProductSlice.reducer



