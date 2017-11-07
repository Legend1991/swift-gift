import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Redirect} from 'react-router-dom';

import {store, history} from './redux/store';

// pages
import Home from './containers/home/Home';

// styles
// import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);