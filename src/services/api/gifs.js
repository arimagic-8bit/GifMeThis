
const API_KEY = 'PbM0ylEVwCpo8GeyQBROHAejOplS4B8i';
const URL = 'https://api.giphy.com/v1';


export const makeRequest = (params) => {
  const defaultHeaders = { 'Content-Type': 'application/json' };

  const { endpoint, statusOk, requestConfig = {} } = params;
  const body = requestConfig.body ?? undefined;
  const method = requestConfig.method ?? 'GET';
  const headers = requestConfig.headers ? {...requestConfig.headers, ...defaultHeaders} : defaultHeaders;

  return new Promise((resolve, reject) => {

    fetch(endpoint, {
      body,
      headers,
      method
    })
    .then((response) => {
      const { status } = response;
      if (statusOk.length && !statusOk.includes(status)) {

        // eslint-disable-next-line no-throw-literal
        throw({ status, errors: response.errors });
      }
      resolve({ status, data: response });
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export const getGifs = async(limit) => {
  const params = {
    endpoint: `${URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}`,
    statusOk: [200],
  };
  return makeRequest(params);
}