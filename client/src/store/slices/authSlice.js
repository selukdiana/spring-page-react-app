import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../http'
import axios from 'axios'

const initialStateAuth = {
  status: null,
}

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/refresh', {
      withCredentials: true,
    })
    const data = await response.data
    console.log(data)
    localStorage.setItem('accessToken', data.accessToken)
    return data
  } catch (err) {
    console.log(err)
  }
})

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData) => {
    const response = await $api.post('/login', userData)
    if (response.status !== 201) throw new Error('Unauth')
    const data = response.data
    console.log(data)
    localStorage.setItem('accessToken', data.accessToken)
    return data.username
  }
)
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData) => {
    const response = await $api.post('/signup', userData)
    const data = response.data
    return data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    logout: (state) => {
      state.status = 'unauthorized'
    },
  },
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
    builder.addCase(signUpUser.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.status = 'signedUp'
    })
    builder.addCase(signUpUser.rejected, (state) => {
      state.status = 'error'
    })
    builder.addCase(checkAuth.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(checkAuth.fulfilled, (state) => {
      console.log('resolved')
      state.status = 'authorized'
    })
    builder.addCase(checkAuth.rejected, (state) => {
      console.log('rejected')
      state.status = 'unauthorized'
    })
  },
})

export default authSlice.reducer
export const { logout } = authSlice.actions
