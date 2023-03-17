// IMPORTATION

import {
  ALL_USER,
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGOUT_USER,
  ONE_USER,
  SUCC_USER,
} from "../ActionType/user";

// INITIAL STATE
const initialState = {
  user: null,
  loadUser: false,
  erros: [],
  isAuth: false,
  userToGet: {},
  listUsers: [],
  success: null,
};
// PURE FUNCTION

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case SUCC_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        success: payload.success,
      };
      case ALL_USER:
        return { ...state, listUsers: payload.listUsers, loadUser: false  };
    case ONE_USER:
      return {
        ...state,
        userToGet: payload.userToGet,
        loadUser: false,
        isAuth: true,
      };
    case FAIL_USER:
      return { ...state, loadUser: false, erros: payload };
    case CURRENT_USER:
      return { ...state, user: payload, loadUser: false, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        erros: [],
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
