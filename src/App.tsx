import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
import { AuthState } from "./store/auth-slice";

function App() {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated
  );
  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
