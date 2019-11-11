import React from 'react';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Articles from './components/Articles/Articles';


function App() {
  return (
    <Provider store={store}>
      <Articles/>
    </Provider>
  );
}

export default App;
