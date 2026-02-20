import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    user: [],
    loading: false,
    error: null,
}

const fetchuser = createAsyncThunk(
    'UserSlice/fetchuser',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)
        return data
    }
)

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
    },
    extraReducers: (addBuilder) => {
        addBuilder.addCase(fetchuser.pending, (state, action) => {
            state.loading = true
        })
        addBuilder.addCase(fetchuser.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            // console.log(action)        
       })
        addBuilder.addCase(fetchuser.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }

})

// export const { fetch_user } = UserSlice.actions

export { fetchuser }

export default UserSlice.reducer
