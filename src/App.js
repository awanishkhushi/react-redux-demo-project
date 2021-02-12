import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {

  const dispatch = useDispatch();

  return (
    <Router >
      <div>
        <nav className="test1">
          <div>
            <li >
              <Link to={"/home"} >
                Home
              </Link>
            </li>

            {(
              <li >
                <Link to={"/user"} >
                  User
                </Link>
              </li>
            )}
          </div>

          {  (
            <div >
              <li >
                <Link to={"/login"}>
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container1">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;