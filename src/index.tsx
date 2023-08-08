import 'antd/dist/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import upgradeStore from './redux/store';

const cachedStore = JSON.parse(localStorage.getItem('upgrade-state'));

const store = createStore(upgradeStore, cachedStore ? cachedStore : undefined);

ReactDOM.render(
    <div style={{width: '20rem', margin: 'auto', marginTop: '10rem'}}>
        <Provider store={store}>
            <Router />
        </Provider>
    </div>,
    document.getElementById('root')
  );