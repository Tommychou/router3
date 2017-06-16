import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import finalCreateStore from './store/configureStore';

import reducer from './reducers';

import './index.css';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const store = finalCreateStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();