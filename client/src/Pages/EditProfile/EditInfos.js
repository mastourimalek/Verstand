import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editAdminInfos, getAdmin } from "../../JS/Actions/admin";
import { editUserInfos, getUser } from "../../JS/Actions/user";

const EditInfos = () => {
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
    },);
  
    useEffect(() => {
      if (isAuth) {
        dispatch(getUser(`${_id}`));
      }
    }, );


  const editAdmin = () => {
    dispatch(editAdminInfos(_id, newAdmin));
  };
  const editUser = () => {
    dispatch(editUserInfos(_id, newUser));
  };
  return (
    <div>
      {isAuth ? (
        <div>
<Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${userToGet.firstname}`}
            name="firstname"
            value={newUser.firstname}
            onChange={handleChangeUser}
          />
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder={`${userToGet.name}`}
            name="name"
            value={newUser.name}
            onChange={handleChangeUser}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={`${userToGet.email}`}
            name="email"
            value={newUser.email}
            onChange={handleChangeUser}
          />
        </Form.Group>
        <Link to={"/Profile/:_id"}>
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
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${adminToGet.firstname}`}
            name="firstname"
            value={newAdmin.firstname}
            onChange={handleChangeAdmin}
          />
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder={`${adminToGet.name}`}
            name="name"
            value={newAdmin.name}
            onChange={handleChangeAdmin}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={`${adminToGet.email}`}
            name="email"
            value={newAdmin.email}
            onChange={handleChangeAdmin}
          />
        </Form.Group>
        <Link to={"/Profile/:_id"}>
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

export default EditInfos;
