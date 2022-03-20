export const queryBuilder = (params, noFirst) => {
  let newQuery = '';

  Object.entries(params).forEach(([key, value], index) => {
    if (index === 0 && !noFirst) {
      newQuery+= `?${key}=${value}`
    } else {
      newQuery+= `&${key}=${value}`
    }
  });

  return newQuery;
};
