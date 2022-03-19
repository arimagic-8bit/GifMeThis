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
      const { count, total, list } = payload;
      return {
        ...state,
        error: false,
        fetching: false,
        list: {...state.list, ...list},
        count,
        totalCount: total,
      }
    default:
      return state;
  }
}