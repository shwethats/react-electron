import store from '..';
import types from '../action-types';
import {
	fetchAllUsers
} from '../../services/landing-services'

import userList from '../../user.json';



export function fetchAllUsersList() {
	debugger
	store.dispatch( {
		type: types.FETCH_ALL_USER_LIST,
		payload: userList.users

	} );

	//return fetchAllUsers()
	//	.then( resp => resp.data )
	//	.then( data => {
	//		const list = data.result || null;
	//		store.dispatch( {
	//			type: types.FETCH_ALL_USER_LIST,
	//			payload: list
	//		} );
	//	} )
	//	.catch( err => {
	//		store.dispatch( {
	//			type: types.FETCH_ALL_USER_LIST_ERR,
	//			payload: err,
	//			err: true
	//		} );
	//		return null;
	//	} );
}
