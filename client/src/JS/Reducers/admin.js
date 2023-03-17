// IMPORTATION

import {
 
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGOUT_ADMIN,
  ONE_ADMIN,
  SUCC_ADMIN,
} from "../ActionType/admin";

// INITIAL STATE
const initialState = {
  admin: null,
  loadAdmin: false,
  erros: [],
  isAuthAdmin: false,
  adminToGet: {},
  success: null,
  isAdmin: false,
};
// PURE FUNCTION

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ADMIN:
      return { ...state, loadAdmin: true };
    case SUCC_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadAdmin: false,
        admin: payload.admin,
        isAuthAdmin: true,
        success: payload.success,
        isAdmin: true,
        listUsers: [],
      };

    case ONE_ADMIN:
      return {
        ...state,
        adminToGet: payload.adminToGet,
        loadAdmin: false,
        isAuthAdmin: true,
      };
    case FAIL_ADMIN:
      return { ...state, loadAdmin: false, erros: payload };
    case CURRENT_ADMIN:
      return {
        ...state,
        admin: payload,
        loadAdmin: false,
        isAuthAdmin: true,
        isAdmin: true,
      };
    case LOGOUT_ADMIN:
      localStorage.removeItem("token");
      return {
        admin: null,
        loadAdmin: false,
        erros: [],
        isAuthAdmin: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
