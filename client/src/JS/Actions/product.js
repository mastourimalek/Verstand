// IMPORTATION

import axios from "axios";

import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCC_PRODUCT,
} from "../ActionType/product";

// GET ALL PRODUCT
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get("/api/product/getAll");
    dispatch({ type: SUCC_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// ADD PRODUCT
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    
    await axios.post("/api/product/add", newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// EDIT  PRODUCT
export const editProduct = (id, newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    await axios.put(`/api/product/${id}`, newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// GET ONE PRODUCT
export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({ type: ONE_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};
