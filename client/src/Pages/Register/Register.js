import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../JS/Actions/user";


const Register = () => {
  const [newUser, setNewUser] = useState({
    firstname:"",
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleUser = () => {
    dispatch(register(newUser));
  };
  return (
    <div>
      <h2>Register User</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter firstName"
            name="firstname"
            value={newUser.firstname}
            onChange={handleChange}
          />   
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit" onClick={handleUser}>
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Register;
