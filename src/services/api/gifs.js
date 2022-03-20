import { makeRequest } from "./utils";

const API_KEY = 'PbM0ylEVwCpo8GeyQBROHAejOplS4B8i';
const ENDPOINT = 'https://api.giphy.com/v1/gifs';


export const getGifs = async(query) => {
  const params = {
    endpoint: `${ENDPOINT}/trending?api_key=${API_KEY}${query}`,
    statusOk: [200],
    method: 'GET',
  };
  return makeRequest(params);
};

export const searchGifs = async(query) => {
  const params = {
    endpoint: `${ENDPOINT}/search?api_key=${API_KEY}${query}`,
    statusOk: [200],
    method: 'GET'
  };
  return makeRequest(params);
};
