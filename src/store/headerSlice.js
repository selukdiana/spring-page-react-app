import { createSlice } from "@reduxjs/toolkit";

const initialStateHeaderData = {
  headerData: [
    {
      id: 1,
      title: "Why Spring",
      list: [
        "Overview",
        "Generative AI",
        "Microservices",
        "Web Applications",
        "Cloud",
        "Event Driven",
        "Batch",
      ],
    },
    {
      id: 2,
      title: "Learn",
      list: ["Overview", "Generative AI", "Microservices", "Web Applications"],
    },
    {
      id: 3,
      title: "Projects",
      list: ["Overview", "Generative AI", "Microservices"],
    },
    {
      id: 4,
      title: "Academy",
      list: ["Overview", "Generative AI"],
    },
    {
      id: 5,
      title: "Solutions",
      list: ["Overview", "Generative AI", "Microservices"],
    },
    {
      id: 6,
      title: "Community",
      list: ["Overview", "Generative AI", "Microservices"],
    },
  ],
};

const headerSlice = createSlice({
  name: "headerData",
  initialState: initialStateHeaderData,
  reducers: {},
});

export default headerSlice.reducer;
