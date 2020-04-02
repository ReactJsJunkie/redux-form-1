export const submitNewUser = values => {
  console.log(JSON.stringify(values, null, 2));
  return { type: "SUBMIT_NEW_USER", payload: values };
};

export const toggleUserModal = () => {
  return { type: "TOGGLE_USER_MODAL" };
};

export const removeUser = id => {
  return { type: "REMOVE_USER", payload: id };
};
