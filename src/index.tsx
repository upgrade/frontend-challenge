import 'antd/dist/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import upgradeStore from './redux/store';

const store = createStore(upgradeStore);

ReactDOM.render(
    <div style={{width: '20rem', margin: 'auto', marginTop: '10rem'}}>
        <Provider store={store}>
            <Router />
        </Provider>
    </div>,
    document.getElementById('root')
  );