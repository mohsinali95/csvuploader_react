import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Routers from './Routers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    </div>
  );
}

export default App;
