// IMPORTATION

import axios from "axios";
import { FAIL_ORDER, LOAD_ORDER, SUCC_ORDER } from "../ActionType/order";

// GET ALL ORDERS
export const getOrders = () => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    let result = await axios.get("/api/order/allOrders");
    dispatch({ type: SUCC_ORDER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};

// ADD ORDER
export const addOrder = (newOrder) => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    await axios.post("/api/order/postOrder", newOrder);
    dispatch(getOrders());
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};

// DELETE PRODUCT
export const deleteOrder = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ORDER });
  try {
    await axios.delete(`/api/order/${id}`);
    dispatch(getOrders());
  } catch (error) {
    dispatch({ type: FAIL_ORDER, payload: error.response.data.errors });
  }
};
