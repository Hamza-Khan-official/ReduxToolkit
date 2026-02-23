import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import db from "../../config/firebase";

const initialState = {
    products: [],
    fetchLoading: false,
    pushLoading: false,
    isError: false

}

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    extraReducers: (builder) => {
        //  FETCH PRODUCT
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.products = [],
                state.fetchLoading = true,
                state.pushLoading = false,
                state.isError = false
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload,
                state.fetchLoading = false,
                state.pushLoading = false,
                state.isError = false
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.products = [],
                state.fetchLoading = false,
                state.pushLoading = false,
                state.isError = true
        })
        // PUSH DATA
        builder.addCase(pushProduct.pending, (state, action) => {
            state.fetchLoading = false,
                state.pushLoading = true,
                state.isError = false
        })
        builder.addCase(pushProduct.fulfilled, (state, action) => {
            state.products = action.payload,
                state.fetchLoading = false,
                state.pushLoading = false,
                state.isError = false
        })
        builder.addCase(pushProduct.rejected, (state, action) => {
            state.products = [],
                state.fetchLoading = false,
                state.pushLoading = false,
                state.isError = true
        })
    }
})

export const fetchProduct = createAsyncThunk(
    'ProductSlice/fetch',
    async () => {

        // DATABASE WEB DATABASE

        const docRef = collection(db, "NewTable")
        const getdata = await getDocs(docRef)

        const allData = getdata.docs.map(doc =>  ({
            id: doc.id,
            ...doc.data()
        }))

        return allData

    })

export const pushProduct = createAsyncThunk(
    'ProductSlice/push',
    async () => {

        const pushdoc = await setDoc(doc(db, "NewTable", "000022"), {
            Email: "Testing@gmail.com",
            Name: "Test",
            Phone: "00000033333",
            UserName: "Test",
            Website: "test.org",
            id: "000022"
        })
        return pushdoc
    })



export default ProductSlice.reducer



