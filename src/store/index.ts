import { createStore } from "redux";

type Actions = { type: "INCREMENT" } | { type: "DECREMENT" };

const counterReducer = (state = { counter: 0 }, action: Actions) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
