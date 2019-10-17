import { configureStore } from "redux-starter-kit";
import { combineReducers } from 'redux';
import articles from './articles/reducer';

const rootReducer = combineReducers({
  articles
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
