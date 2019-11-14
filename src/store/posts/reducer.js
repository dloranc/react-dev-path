import { createReducer } from 'redux-starter-kit';
import { setPosts } from './actionCreators';

const posts = createReducer([], {
  [setPosts]: (_, action) => {
    return [...action.payload]
  }
});

export default posts;
