import { initialState } from "./initialState";
import { types } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_STATE:
      return {
        ...state,
        Step: state.Step + 1,
        Steps: [...state.Steps, state.Step],
      };

    case types.UPDATE_FORM_DATA:
      return {
        ...state,
        FormData: { ...action.data },
      };

    case types.POST_DATA_LOADNING:
      return {
        ...state,
        postLoading: true,
        postSuccess: false,
        postError: false,
      };

    case types.POST_DATA_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postSuccess: true,
        postError: false,
      };

    case types.POST_DATA_ERROR:
      return {
        ...state,
        postLoading: false,
        postSuccess: false,
        postError: true,
      };

    case types.CLEAR_STATE:
      return {
        ...state,
        Step: 1,
        Steps: [],
        FormData: null,
      };

    default:
      return state;
  }
};

export default reducer;
