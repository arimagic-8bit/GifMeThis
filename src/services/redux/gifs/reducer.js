/* eslint-disable import/no-anonymous-default-export */
import * as TYPES from "./types";

/* Initial state */
const initialState = {
  list: [],
  count: 0,
  totalCount: 0,
  fetching: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_GIFS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: false,
      }
    case TYPES.GET_GIFS_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      }
    case TYPES.GET_GIFS_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
        list: {...state.list, payload}
      }
    default:
      return state;
  }
}