const initialState = {
  confirmed: 0,
  recovered: 0,
  critical: 0,
  deaths: 0,
};

export const dataTotalWorld = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_ALL_DATA_SUCCESS":
      return {
        ...state,
        confirmed: action.payload,
      };

    case "REQUEST_RECOVERED_DATA_SUCCESS":
      return {
        ...state,
        recovered: action.payload,
      };

    case "REQUEST_CRITICAL_DATA_SUCCESS":
      return {
        ...state,
        critical: action.payload,
      };

    case "REQUEST_DEATHS_DATA_SUCCESS":
      return {
        ...state,
        deaths: action.payload,
      };

    default:
      return state;
  }
};
