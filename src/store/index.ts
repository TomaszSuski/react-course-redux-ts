// not using redux standalone anymore, but redux-toolkit
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// configureStore automatycznie generuje store
// przyjmuje obiekt z reducerami
const store = configureStore({
  // reducery, jeśli jest więcej niz jeden, to trzeba je podać jako obiekt
  // klucze są dowolne, ale muszą być unikalne
  // wartościami są reducery
  reducer: { counter: counterSlice, auth: authSlice },

  // dla jednego reducera można podać bezpośrednio reducer
  // reducer: counterSlice.reducer,
});

export default store;

// typ konieczny do obsługi dispatch przez komponenty zbudowane jako klasy
export type counterDispatchType = typeof store.dispatch;

//
/*
old way using redux only and reducer function

export type ActionsType =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "TOGGLE" }
  | { type: "INCREASE_BY_NUMBER"; payload: number }
  | { type: "DECREASE_BY_NUMBER"; payload: number };


const counterReducer = (
  state = initialState,
  action: ActionsType
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
