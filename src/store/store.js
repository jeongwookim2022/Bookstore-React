import { configureStore, createSlice } from "@reduxjs/toolkit";

// FOOTER SHOW
let isSearch = createSlice({
  name: "isSearch",
  initialState: false,
  reducers: {
    setFooter(state, value) {
      state = value.payload;
    },
  },
});
export let { setFooter } = isSearch.actions;

export default configureStore({
  reducer: {
    isSearch: isSearch.reducer,
  },
});
