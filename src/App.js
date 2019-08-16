import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Drawer from './components/commons/drawer';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Drawer>
        <Routes />
      </Drawer>
    </Provider>
  );
};
