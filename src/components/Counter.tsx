import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Actions, CounterState } from "../store";
import classes from "./Counter.module.css";

type Dispatch = (action: Actions) => void;

export interface CounterProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
  toggleCounter: () => void;
}

class Counter extends Component<CounterProps> {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {
    this.props.toggleCounter();
  };

  render(): React.ReactNode {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler}>Decrement</button>
          <button onClick={this.incrementHandler}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// używając connect() zamiast useSelector i useDispatch wykonujemy connect,
// to zwraca naową funcję, którą wywołujemy z komponentem. Stąd tak dziwny zapis.
// sama metoda connect() przyjmuje dwa argumenty, pierwszy to funkcja, która
// pobiera stan z redux store, drugi to funkcja, która pozwala na wywołanie
// akcji w redux store.

// funkcja mapStateToProps pobiera stan z redux store i zwraca obiekt, który
// jest przekazywany do komponentu jako propsy. W tym przypadku komponent
// Counter otrzyma props counter, który będzie zawierał stan z redux store.
const mapStateToProps = (state: CounterState) => {
  return {
    counter: state.counter,
  };
};

// funkcja mapDispatchToProps przyjmuje dispatch jako argument i zwraca obiekt,
// który jest przekazywany do komponentu jako propsy. W tym przypadku komponent
// Counter otrzyma propsy increment, decrement i toggleCounter, które będą
// funkcjami, które wywołują odpowiednie akcje w redux store.
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    toggleCounter: () => dispatch({ type: "TOGGLE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// original Counter component as function
export const CounterAsFC = () => {
  // useSelector pozwala na pobranie stanu z redux store
  const counter = useSelector((state: CounterState) => state.counter);
  // useDispatch pozwala na wywołanie akcji w redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
