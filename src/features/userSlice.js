import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "../services/appApi";
const initialState = {};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.loadingUser.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.logout.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export default userSlice.reducer;
