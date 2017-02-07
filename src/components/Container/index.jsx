import React from 'react';
import { connect } from 'react-redux';

// Import the nested components
import Presentation from './Presentation';

const mapStateToProps = (state) => {
	return {
		// Put the props here
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		// Put the actions here
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Presentation);
