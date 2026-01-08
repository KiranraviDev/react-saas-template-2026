import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 1. Define the shape of the state for this feature
interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// 2. Set the initial state
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // 3. Reducers define how state changes in response to actions
  reducers: {
    increment: (state) => {
      // RTK uses Immer, allowing you to write "mutating" logic safely
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use PayloadAction to type the action's data
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// 4. Export auto-generated action creators for use in components
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// 5. Export the reducer for store configuration
export default counterSlice.reducer;
