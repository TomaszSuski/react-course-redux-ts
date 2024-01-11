import React from "react";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, authActions } from "../store/auth-slice";

const Header = () => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated
  );

  const dispatch = useDispatch();

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
