import { createStore } from "redux";

export interface CounterState {
  counter: number;
}

export type Actions =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "TOGGLE" }
  | { type: "INCREASE_BY_NUMBER"; payload: number }
  | { type: "DECREASE_BY_NUMBER"; payload: number };

const counterReducer = (state = { counter: 0 }, action: Actions) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "INCREASE_BY_NUMBER":
      return { counter: state.counter + action.payload };
    case "DECREASE_BY_NUMBER":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
