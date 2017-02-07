import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Container from './components/Container';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Container} />
		</Router>
	</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;