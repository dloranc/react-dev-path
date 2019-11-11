import { configureStore } from "redux-starter-kit";
import { combineReducers } from 'redux';
import articles from './articles/reducer';
import show from './show/reducer';

const rootReducer = combineReducers({
  articles,
  show
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
