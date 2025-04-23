import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import springBootSvg from "../../assets/spring-boot.svg";
import springFramework from "../../assets/spring-framework.svg";
import springData from "../../assets/spring-data.svg";
import springCloud from "../../assets/spring-cloud.svg";
import springDataFlow from "../../assets/spring-data-flow.svg";

export const imgs = {
  springBootSvg,
  springFramework,
  springData,
  springCloud,
  springDataFlow,
};
const initialStateSpringComponents = {
  components: [],
};
export const fetchSpringComponents = createAsyncThunk(
  "springComponents/fetchSpringComponents",
  async () => {
    const response = await fetch("http://localhost:8080/api/projects");
    const data = await response.json();
    return data;
  }
);
export const fetchSpringComponentsFilter = createAsyncThunk(
  "springComponents/fetchSpringComponentsFilter",
  async (value) => {
    const response = await fetch(
      `http://localhost:8080/api/projects?filter=${value}`
    );
    const data = await response.json();
    return data;
  }
);

const springComponentsSlice = createSlice({
  name: "springComponents",
  initialState: initialStateSpringComponents,
  extraReducers: (builder) => {
    builder.addCase(fetchSpringComponents.fulfilled, (state, action) => {
      state.components = action.payload;
    });
    builder.addCase(fetchSpringComponentsFilter.fulfilled, (state, action) => {
      state.components = action.payload;
    });
  },
});

export default springComponentsSlice.reducer;
