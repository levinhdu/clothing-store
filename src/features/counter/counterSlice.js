import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log(action.payload);
      // const found = state.find((x) => x.product.id === product.id);
      // const newItem = { product: action.payload, quantity: 1 };
      // state.push(action.payload);
      // console.log(action.payload);
      // console.log(state[0]);

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
