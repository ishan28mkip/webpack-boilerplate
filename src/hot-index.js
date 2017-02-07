import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

// Add the global CSS here
import globalCSS from './global.scss';

// Basic rootfile where redux provider and react-router are added in the mix
import Root from './root';

// Import the reducers are create the store
import kimApp from './reducers';
let store = createStore(kimApp, applyMiddleware(thunk));

// Dispatch the initial type loader


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store = {store}/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    render(Root)
  });
}