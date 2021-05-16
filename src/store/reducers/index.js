import { combineReducers } from 'redux';

import { reducer as toastrReducer } from 'react-redux-toastr';

import landingPage from './landing-reducer';


export default combineReducers( {
	toastr: toastrReducer,
	landingPage:landingPage
  });
  