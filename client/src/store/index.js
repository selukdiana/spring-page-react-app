import { configureStore } from '@reduxjs/toolkit'
import springComponentsReducer from './slices/springComponentsSlice'
import headerReducer from './slices/headerSlice'
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    springComponents: springComponentsReducer,
    header: headerReducer,
    auth: authReducer,
  },
})
