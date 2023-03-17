import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editAdminPassword, getAdmin } from "../../JS/Actions/admin";
import {  editUserPassword, getUser } from "../../JS/Actions/user";

const EditPassword = () => {
  const { _id } = useParams();

  const [newAdmin, setNewAdmin] = useState({});
  const [newUser, setNewUser] = useState({});
  
  const adminToGet = useSelector((state) => state.adminReducer.adminToGet);
  const userToGet = useSelector((state) => state.userReducer.userToGet);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const dispatch = useDispatch();
  const handleChangeAdmin = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const handleChangeUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthAdmin) {
      dispatch(getAdmin(`${_id}`));
    }
  });

  useEffect(() => {
    if (isAuth) {
      dispatch(getUser(`${_id}`));
    }
  });

  const editAdmin = () => {
    dispatch(editAdminPassword(_id, newAdmin));
  };
  const editUser = () => {
    dispatch(editUserPassword(_id, newUser));
  };
  return (
    <div>
      {isAuth ? (
        <div>
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>oldPassword</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${userToGet.oldPassword}`}
                name="oldPassword"
                value={newUser.oldPassword}
                onChange={handleChangeUser}
              />
              <Form.Label>password </Form.Label>
              <Form.Control
                type="text"
                placeholder={`${userToGet.password}`}
                name="password"
                value={newUser.password}
                onChange={handleChangeUser}
              />
            </Form.Group>
            <Link to={"/"}>
              <Button variant="primary" type="submit" onClick={editUser}>
                Submit
              </Button>
            </Link>
          </Form>
        </div>
      ) : isAuthAdmin ? (
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>oldPassword</Form.Label>
              <Form.Control
                type="text"
                placeholder={`${adminToGet.oldPassword}`}
                name="oldPassword"
                value={newAdmin.oldPassword}
                onChange={handleChangeAdmin}
              />
              <Form.Label>password </Form.Label>
              <Form.Control
                type="text"
                placeholder={`${adminToGet.password}`}
                name="password"
                value={newAdmin.password}
                onChange={handleChangeAdmin}
              />
            </Form.Group>
            <Link to={"/"}>
              <Button variant="primary" type="submit" onClick={editAdmin}>
                Submit
              </Button>
            </Link>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default EditPassword;
