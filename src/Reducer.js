const initState = {
  users: []
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SUBMIT_NEW":
      return {
        ...state,
        users: state.users.concat(payload)
      };
    default:
      return state;
  }
};
