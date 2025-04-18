import { configureStore } from "@reduxjs/toolkit";
import springComponentsReducer from "./springComponentsSlice";
import headerReducer from "./headerSlice";

export default configureStore({
  reducer: { springComponents: springComponentsReducer, header: headerReducer },
});
