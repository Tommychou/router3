import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import finalCreateStore from './store/configureStore';
import reducer from './reducers';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = finalCreateStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
      <div>
          <Router history={history} routes={routes} />
      </div>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();