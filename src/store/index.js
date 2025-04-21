import { configureStore } from "@reduxjs/toolkit";
import springComponentsReducer from "./slices/springComponentsSlice";
import headerReducer from "./slices/headerSlice";

export default configureStore({
  reducer: {
    springComponents: springComponentsReducer,
    header: headerReducer,
  },
});
