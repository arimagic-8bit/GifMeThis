import * as TYPES from "./types";
import { store } from "../store";

export const getGifs = (payload) => store.dispatch({
  type: TYPES.GET_GIFS_REQUEST,
  payload,
});
