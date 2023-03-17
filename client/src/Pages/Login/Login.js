import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { current, login } from "../../JS/Actions/user";
import { currentAdmin, loginAdmin } from "../../JS/Actions/admin";

const Login = () => {

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  },);
  
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  return (
    <div>
      {isAuth ? (
        navigate("/")
      ) : isAuthAdmin ? (
        navigate("/")
      ) : (
        <div>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          <Button variant="primary" type="submit" onClick={handleUser}>
            Log In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
