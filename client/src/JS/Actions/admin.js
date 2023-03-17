// IMPORTATION

import axios from "axios";
import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGOUT_ADMIN,
  ONE_ADMIN,
  SUCC_ADMIN,
} from "../ActionType/admin";

// SIGN UP
//export const registerAdmin = (newAdmin) => async (dispatch) => {
// dispatch({ type: LOAD_ADMIN });
// try {
//   let result = await axios.post("/api/admin/registerAdmin", newAdmin);
//  dispatch({ type: SUCC_ADMIN, payload: result.data });
//  } catch (error) {
// dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
// }
//};

// LOGIN
export const loginAdmin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let result = await axios.post("/api/admin/loginAdmin", admin);
    dispatch({ type: SUCC_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};

// CURRENT ADMIN
export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/admin/currentAdmin", config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};

// LOG OUT
export const logoutAdmin = () => async (dispatch) => {
  dispatch({ type: LOGOUT_ADMIN });
};

// GET ONE ADMIN
export const getAdmin = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let result = await axios.get(`/api/admin/one/${id}`);
    dispatch({ type: ONE_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response });
  }
};

// EDIT  ADMIN INFOS
export const editAdminInfos = (id, newAdmin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.put(`/api/admin/edit/${id}`, newAdmin, config);
    dispatch({ type: SUCC_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};

// EDIT  ADMIN PASSWORD
export const editAdminPassword = (id, newAdmin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.put(`/api/admin/password/${id}`, newAdmin, config);
    dispatch({ type: SUCC_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};
