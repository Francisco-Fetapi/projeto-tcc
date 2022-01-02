import { createStore, combineReducers } from "redux";
import AppReducer from "./App.reducer";
import SignUpReducer from "./SignUp.reducer";

const reducers = combineReducers({
  App: AppReducer,
  SignUp: SignUpReducer,
});

const store = createStore(reducers);

export default store;
