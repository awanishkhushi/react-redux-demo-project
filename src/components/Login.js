import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Form, Input, Button } from 'react-router-dom';

import { login } from "../actions/auth";

const Login = (props) => {
  const form = useRef();
  const clickButton = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {

    setLoading(true);

      dispatch(login(username, password))
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div>

        <Form onSubmit={handleLogin} ref={form}>
          <div>
            <label className="username">Username</label>
            <Input
			  type="text"
			   className="username"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div >
            <label className="password">Password</label>
            <Input
              type="password"
              className="secret"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div>
            <button>
              {loading}
              <span>Login</span>
            </button>
          </div>

          <Button style={{ display: "none" }} ref={clickButton} />
        </Form>
      </div>
    </div>
  );
};

export default Login;