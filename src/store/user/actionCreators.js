import { createAction } from 'redux-starter-kit';
import axios from 'axios';
import { setComments } from '../comments/actionCreators';
import { setPosts } from '../posts/actionCreators';

export const setUser = createAction('user/SET');

const placeholder = 'https://jsonplaceholder.typicode.com';

export const fetchUser = () => dispatch =>
  axios.get(`${placeholder}/users?email=Sincere@april.biz`)
    .then(response => {
      const { data } = response;
      const [ user ] = data;

      const { id } = user;

      Promise.all([
        axios.get(`${placeholder}/comments?userId=${id}`),
        axios.get(`${placeholder}/posts?userId=${id}`)
      ]).then(values => {
        dispatch(setComments(values[0].data));
        dispatch(setPosts(values[1].data));
      });

      dispatch(setUser(user));
    });
