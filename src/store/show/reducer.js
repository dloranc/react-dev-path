import { createReducer } from 'redux-starter-kit';
import { setShow } from './actionCreators';

const showReducer = createReducer(true, {
  [setShow]: (_, action) => {
    return action.payload
  },
});

export default showReducer;
