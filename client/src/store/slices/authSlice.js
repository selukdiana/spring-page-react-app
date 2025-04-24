import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialStateAuth = {
  status: null,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    debugger;
    try {
      const response = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })
      if (!response.ok) {
        throw new Error("Can't fetch")
      }
      const data = await response.json()
      return data
    } catch (e) {
      rejectWithValue(e.message)
    }


  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(loginUser.fulfilled, (state) => {
      state.status = 'authorized'
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.status = 'unauthorized'
    })
  },
})

export default authSlice.reducer
