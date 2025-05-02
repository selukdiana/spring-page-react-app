import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../http'
// import axios from 'axios'

const initialStateAuth = {
  status: null,
  errors: {},
}

// export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/api/refresh', {
//       withCredentials: true,
//     })
//     const data = await response.data
//     console.log(data)
//     localStorage.setItem('accessToken', data.accessToken)
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// })

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await $api.post('/login', userData)
      const data = response.data
      localStorage.setItem('accessToken', data.accessToken)
      return data.username
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await $api.post('/signup', userData)
      const data = response.data
      return data
    }
    catch (err) {
      const data = err.response.data.errors;
      const errors = {}
      for (const error of data) {
        errors[error.path] = error.msg
      }
      return rejectWithValue(errors)
    }
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
      state.errors = {}
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.status = 'unauthorized'
      state.errors = {}
    })
    builder.addCase(signUpUser.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.status = 'signedUp'
      state.errors = {}
    })
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.status = 'error'
      state.errors = payload
    })
    // builder.addCase(checkAuth.pending, (state) => {
    //   state.status = 'pending'
    // })
    // builder.addCase(checkAuth.fulfilled, (state) => {
    //   console.log('resolved')
    //   state.status = 'authorized'
    // })
    // builder.addCase(checkAuth.rejected, (state) => {
    //   console.log('rejected')
    //   state.status = 'unauthorized'
    // })
  },
})

export default authSlice.reducer
export const { logout } = authSlice.actions
