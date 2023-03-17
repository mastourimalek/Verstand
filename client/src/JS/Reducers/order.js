// IMPORTATION

import { FAIL_ORDER, LOAD_ORDER, SUCC_ORDER } from "../ActionType/order";

// INITIAL STATE
const initialState = {
  listOrders: [],
  erros: null,
  load: false,
};
// PURE FUNCTION

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ORDER:
      return { ...state, load: true };
    case SUCC_ORDER:
      return { ...state, load: false, listOrders: payload.listOrders };
    case FAIL_ORDER:
      return { ...state, load: false, erros: payload };
    default:
      return state;
  }
};

export default orderReducer;
