// not using redux standalone anymore, but redux-toolkit
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface CounterStateType {
  counter: number;
  showCounter: boolean;
}

export type ActionsType =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "TOGGLE" }
  | { type: "INCREASE_BY_NUMBER"; payload: number }
  | { type: "DECREASE_BY_NUMBER"; payload: number };


  export type counterDispatchType = typeof store.dispatch;

const initialState: CounterStateType = { counter: 0, showCounter: true };

// createSlice automatycznie generuje akcje i reducery
// nie trzeba pisać switcha
// przy pracy z redux-toolkit nie da się przypadkowo zmodyfikować stanu
// więc zapis jak poniżej zawsze zaowocuje nowym stanem
// toolkit zadba o klonowanie stanu i nie będzie modyfikował go bezpośrednio
const counterSlice = createSlice({
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

// configureStore automatycznie generuje store
// przyjmuje obiekt z reducerami
const store = configureStore({
  // reducery, jeśli jest więcej niz jeden, to trzeba je podać jako obiekt
  // klucze są dowolne, ale muszą być unikalne
  // wartościami są reducery
  // reducer: { counter: counterSlice.reducer },

  // dla jednego reducera można podać bezpośrednio reducer
  reducer: counterSlice.reducer,
});

// dostep do akcji automatycznie generowanych przez createSlice
export const counterActions = counterSlice.actions;

export default store;

/*
old way using redux only and reducer function

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

*/
