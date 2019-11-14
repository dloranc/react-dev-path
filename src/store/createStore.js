import { configureStore } from "redux-starter-kit";
import { combineReducers } from 'redux';
import user from './user/reducer';
import comments from './comments/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
  user,
  comments,
  posts
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
