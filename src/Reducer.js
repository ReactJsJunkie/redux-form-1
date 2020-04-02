const initState = {
  users: [],
  modal: false
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_USER_MODAL":
      return {
        ...state,
        modal: !state.modal
      };
    case "SUBMIT_NEW_USER":
      return {
        ...state,
        users: state.users.concat(payload)
      };
    default:
      return state;
  }
};
