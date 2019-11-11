import { createReducer } from 'redux-starter-kit';
import { setComments } from './actionCreators';

const comments = createReducer([], {
  [setComments]: (_, action) => {
    return [...action.payload]
  }
});

export default comments;
