import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchUser } from '../store/user/actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

let getSpy;

describe('fetchUser', () => {
  beforeEach(() => {
    getSpy = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    getSpy.mockRestore();
  })

  it('dispatchs three actions', () => {
    const store = mockStore({});

    store.dispatch(fetchUser()).then(() => {
      const actions = store.getActions();

      const expectedActions = [
        {
          "payload": {
            "email": "Sincere@april.biz",
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
          },
          "type": "user/SET",
        },
        {
          "payload": [
            {
              "body": "laudantium",
              "email": "Eliseo@gardner.biz",
              "id": 1,
              "name": "id labore ex et quam",
              "postId": 1,
            },
            {
              "body": "est natus",
              "email": "Jayne_Kuhic@sydney.com",
              "id": 2,
              "name": "quo vero",
              "postId": 1,
            },
          ],
          "type": "comments/SET",
        },
        {
          "payload": [
            {
              "body": "quia et",
              "id": 1,
              "title": "sunt aut",
              "userId": 1,
            },
            {
              "body": "est rerum",
              "id": 2,
              "title": "qui est esse",
              "userId": 1,
            },
          ],
          "type": "posts/SET",
        },
      ];

      expect(actions).toEqual(expectedActions);
    });
  });
});
