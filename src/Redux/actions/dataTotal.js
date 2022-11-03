export const getDataTotal = (data) => {
  return {
    type: "REQUEST_ALL_DATA_SUCCESS",
    payload: data,
  };
};

export const getRecoveredTotal = (data) => {
  return {
    type: "REQUEST_RECOVERED_DATA_SUCCESS",
    payload: data,
  };
};

export const getCriticalTotal = (data) => {
  return {
    type: "REQUEST_CRITICAL_DATA_SUCCESS",
    payload: data,
  };
};

export const getDeathsTotal = (data) => {
  return {
    type: "REQUEST_DEATHS_DATA_SUCCESS",
    payload: data,
  };
};
