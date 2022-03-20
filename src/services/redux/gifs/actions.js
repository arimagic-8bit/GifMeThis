import * as TYPES from "./types";
import { store } from "../store";

export const getGifs = (payload) =>
  store.dispatch({
    type: TYPES.GET_GIFS_REQUEST,
    payload,
  });

export const saveFavourites = (payload) =>
  store.dispatch({
    type: TYPES.SAVE_FAVOURITES,
    payload,
  });

export const searchGifs = (payload) =>
  store.dispatch({
    type: TYPES.SEARCH_GIFS_REQUEST,
    payload,
  });

export const deleteGifList = (payload) =>
  store.dispatch({
    type: TYPES.DELETE_GIF_LIST,
    payload,
  });
