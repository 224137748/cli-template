import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 123
};

const { actions, reducer } = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },

    decrement: state => {
      state.count -= 1;
    },

    setCount: (state, { payload }:PayloadAction<number>) => {
      state.count = payload;
    }
  },
  extraReducers: {}
});

export const { increment, decrement, setCount } = actions;
export default reducer;
