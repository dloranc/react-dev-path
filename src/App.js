import React from 'react';
import User from './components/User';
import { Provider } from 'react-redux';

import store from './store/createStore';


const App = () => {
  return (
    <Provider store={store}>
      <User/>
    </Provider>
  );
}

export default App;
