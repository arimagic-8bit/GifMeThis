/* eslint-disable import/no-anonymous-default-export */
import * as TYPES from "./types";

/* Initial state */
const initialState = {
  list: [],
  count: 0,
  totalCount: 0,
  fetching: false,
  error: false,
  favourites: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_GIFS_REQUEST:
    case TYPES.SEARCH_GIFS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case TYPES.GET_GIFS_ERROR:
    case TYPES.SEARCH_GIFS_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case TYPES.SAVE_FAVOURITES:
      return {
        ...state,
        favourites: payload,
      };
    case TYPES.DELETE_GIF_LIST:
      return {
        ...state,
        totalCount: 0,
        count: 0,
        list: [],
      };
    case TYPES.GET_GIFS_SUCCESS:
    case TYPES.SEARCH_GIFS_SUCCESS:
      const { count, total, list } = payload;
      return {
        ...state,
        list: [...state.list, ...list],
        error: false,
        fetching: false,
        count: count,
        totalCount: total,
      };
    default:
      return state;
  }
};
