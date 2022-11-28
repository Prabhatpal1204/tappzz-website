import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "../services/appApi";
const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.getProducts.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.getProductList.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export default productSlice.reducer;
