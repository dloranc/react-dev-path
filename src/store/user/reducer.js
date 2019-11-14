import { createReducer } from 'redux-starter-kit';
import { setUser } from './actionCreators';

const post = createReducer({ title: '', body: '' }, {
  [setUser]: (_, action) => {
    console.log(action);

    return action.payload
  }
});

export default post;
