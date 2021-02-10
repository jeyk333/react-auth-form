import { types } from "./types";
import axios from "axios";

export const updateState = () => ({
  type: types.UPDATE_STATE,
});

export const updateFormData = (data) => ({
  type: types.UPDATE_FORM_DATA,
  data,
});

export const postDataLoading = () => ({
  type: types.POST_DATA_LOADNING,
});

export const postDataSuccess = () => ({
  type: types.POST_DATA_SUCCESS,
});

export const postDataError = () => ({
  type: types.POST_DATA_ERROR,
});

export const postData = () => {
  return (dispatch, getState) => {
    dispatch(postDataLoading());
    let data = getState().auth.FormData;
    axios
      .post("/register", data)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
};

export const clearState = () => ({
  type: types.CLEAR_STATE,
});
