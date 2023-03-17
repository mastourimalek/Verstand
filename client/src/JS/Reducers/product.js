// IMPORTATION

import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCC_PRODUCT,
} from "../ActionType/product";

// INITIAL STATE
const initialState = {
  listProducts: [],
  erros: null,
  load: false,
  productToGet: {},
};
// PURE FUNCTION

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, load: true };
    case SUCC_PRODUCT:
      return { ...state, load: false, listProducts: payload.listProducts };
    case ONE_PRODUCT:
      return { ...state, productToGet: payload.productToGet, load: false };
    case FAIL_PRODUCT:
      return { ...state, load: false, erros: payload };
    default:
      return state;
  }
};

export default productReducer;
