import { createReducer } from 'redux-starter-kit';
import { setArticles, addArticle } from './actionCreators';

const cartReducer = createReducer([], {
  [setArticles]: (_, action) => {
    return [...action.payload]
  },
  [addArticle]: (state, action) => {
    const index = state.findIndex(
      article => article.id === action.payload.id
    );

    if (index !== -1) {
      return state;
    }

    return state.concat(action.payload);
  }
});

export default cartReducer;
