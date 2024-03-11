import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './Admin';
import 'antd/dist/antd.less'
// 开启路由
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Admin />
      </PersistGate>
    </Provider >
  </BrowserRouter>

);

