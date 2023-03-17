// IMPORTATION

import axios from "axios";
import { FAIL_MESSAGE, LOAD_MESSAGE, SUCC_MESSAGE } from "../ActionType/message";


// GET ALL MESSAGES
export const getMessages = () => async (dispatch) => {
  dispatch({ type: LOAD_MESSAGE });
  try {
    let result = await axios.get("/api/message/allMessages");
    dispatch({ type: SUCC_MESSAGE, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_MESSAGE, payload: error.response.data.errors });
  }
};

// ADD MESSAGE
export const addMessage = (newMessage) => async (dispatch) => {
  dispatch({ type: LOAD_MESSAGE });
  try {
    await axios.post("/api/message/postMessage", newMessage);
    dispatch(getMessages());
  } catch (error) {
    dispatch({ type: FAIL_MESSAGE, payload: error.response.data.errors });
  }
};

// DELETE MESSAGES
export const deleteMessage = (id) => async (dispatch) => {
  dispatch({ type: LOAD_MESSAGE });
  try {
    await axios.delete(`/api/message/${id}`);
    dispatch(getMessages());
  } catch (error) {
    dispatch({ type: FAIL_MESSAGE, payload: error.response.data.errors });
  }
};