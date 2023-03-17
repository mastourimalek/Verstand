// IMPORTATION

import axios from "axios";

import {
  ALL_USER,
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGOUT_USER,
  ONE_USER,
  SUCC_USER,
} from "../ActionType/user";

// SIGN UP
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({ type: SUCC_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// LOGIN
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: SUCC_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// CURRENT USER
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// LOG OUT
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

// GET ALL USERS
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get("/api/user/AllUsers");
    dispatch({ type: ALL_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};


// GET ONE USER
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get(`/api/user/${id}`);
    dispatch({ type: ONE_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

// DELETE USER
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    await axios.delete(`/api/user/${id}`);
    
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

// EDIT  USER INFOS
export const editUserInfos = (id, newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.put(`/api/user/edit/${id}`, newUser, config);
    dispatch({ type: SUCC_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// EDIT  USER PASSWORD
export const editUserPassword = (id, newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.put(`/api/user/password/${id}`, newUser, config);
    dispatch({ type: SUCC_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
