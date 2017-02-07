import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { initTypes } from 'actions/KIM';

// Add the global CSS here
import globalCSS from './global.scss';

// Basic rootfile where redux provider and react-router are added in the mix
import Root from './root';

// Import the reducers are create the store
import kimApp from './reducers';
let store = createStore(kimApp, applyMiddleware(thunk));
store.dispatch(initTypes());

const render = (Component) => {
  ReactDOM.render(
      <Component store = {store}/>,
    document.getElementById('root')
  );
};

render(Root);