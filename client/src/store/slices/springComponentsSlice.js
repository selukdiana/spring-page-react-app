import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import springBootSvg from '../../assets/spring-boot.svg'
import springFramework from '../../assets/spring-framework.svg'
import springData from '../../assets/spring-data.svg'
import springCloud from '../../assets/spring-cloud.svg'
import springDataFlow from '../../assets/spring-data-flow.svg'
import $api from '../../http'
import { logout } from './authSlice'

export const imgs = {
  springBootSvg,
  springFramework,
  springData,
  springCloud,
  springDataFlow,
}
const initialStateSpringComponents = {
  components: [],
}
export const fetchSpringComponents = createAsyncThunk(
  'springComponents/fetchSpringComponents',
  async (value, { dispatch, rejectWithValue }) => {
    try {
      let response = await $api.get(
        `/projects${value ? '?filter=' + value : ''}`
      )
      const data = await response.data
      return data
    } catch (e) {
      dispatch(logout())
      return rejectWithValue(e)
    }
  }
)

const springComponentsSlice = createSlice({
  name: 'springComponents',
  initialState: initialStateSpringComponents,
  extraReducers: (builder) => {
    builder.addCase(fetchSpringComponents.fulfilled, (state, action) => {
      state.components = action.payload
    })
  },
})

export default springComponentsSlice.reducer
