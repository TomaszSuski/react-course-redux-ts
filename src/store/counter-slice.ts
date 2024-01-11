import { createSlice } from "@reduxjs/toolkit";

export interface CounterStateType {
  counter: number;
  showCounter: boolean;
}

const initialCounterState: CounterStateType = { counter: 0, showCounter: true };

// createSlice automatycznie generuje akcje i reducery
// nie trzeba pisać switcha
// przy pracy z redux-toolkit nie da się przypadkowo zmodyfikować stanu
// więc zapis jak poniżej zawsze zaowocuje nowym stanem
// toolkit zadba o klonowanie stanu i nie będzie modyfikował go bezpośrednio
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // payload jest domyślnym i jedynym kluczem do przekazania danych do akcji w createSlice
    increaseByNumber(state, action: { payload: number }) {
      state.counter += action.payload;
    },
    decreaseByNumber(state, action: { payload: number }) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;

// dostep do akcji automatycznie generowanych przez createSlice
export const counterActions = counterSlice.actions;
