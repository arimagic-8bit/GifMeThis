const parseJSON = async (obj) => {
  const objStr = await obj.text();

  try {
    return JSON.parse(objStr);
  } catch (e) {
    return objStr;
  }
};
  
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
    .then(async (response) => {
      const { status } = response;

      response = await parseJSON(response);

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
  