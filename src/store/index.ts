import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

export type Actions =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "TOGGLE" }
  | { type: "INCREASE_BY_NUMBER"; payload: number }
  | { type: "DECREASE_BY_NUMBER"; payload: number };


const initialState: CounterState = { counter: 0, showCounter: true };

// createSlice automatycznie generuje akcje i reducery
// nie trzeba pisać switcha
// przy pracy z redux-toolkit nie da się przypadkowo zmodyfikować stanu
// więc zapis jak poniżej zawsze zaowocuje nowym stanem
// toolkit zadba o klonowanie stanu i nie będzie modyfikował go bezpośrednio
createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
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

const counterReducer = (
  state = initialState,
  action: Actions
) => {
 
  switch (action.type) {
    case "INCREMENT":
      // przy pracy z obiektami czy tablicami, nie można modyfikować stanu, tylko zwracać nowy
      // to bardzo ważna zasada pracy z Reduxem
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "DECREMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "INCREASE_BY_NUMBER":
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    case "DECREASE_BY_NUMBER":
      return {
        counter: state.counter - action.payload,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
