import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { userReducer } from "./Reducer";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  users: userReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
