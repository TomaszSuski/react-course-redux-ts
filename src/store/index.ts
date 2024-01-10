import { createStore } from "redux";

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

const counterReducer = (
  state = { counter: 0, showCounter: true },
  action: Actions
) => {
  switch (action.type) {
    case "INCREMENT":
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
