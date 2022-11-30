import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : [],
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    addShippingAddress(state, action) {
      console.log(action.payload);
      state.shipingInfo.push(action.payload);
      localStorage.setItem("shippingInfo", JSON.stringify(state.shipingInfo));
    },
    clearShip(state, action) {
      state.shipingInfo = [];
      localStorage.setItem("shippingInfo", JSON.stringify(state.shipingInfo));
    },
  },
});

export const { addShippingAddress, clearShip } = shippingSlice.actions;
export default shippingSlice.reducer;
