import types from '../action-types';

const defaultState = {
	userList: [],
	fetchUserListErr: false,
	deleteUserErr: false

};

const landingReducer = ( state = defaultState, action ) => {
	debugger
	switch ( action.type ) {
		case types.FETCH_ALL_USER_LIST:
			return {
				...state,
				userList: action.payload,
				fetchUserListErr: false

			};

		case types.FETCH_ALL_USER_LIST_ERR:
			return {
				...state,
				userList: [],
				fetchUserListErr: true
			};

		case types.FILTER_USER_LIST:
			return {
				...state,
				userList: action.payload,
				fetchUserListErr: false
			};

		case types.FILTER_USER_LIST_ERR:
			return {
				...state,
				userList: [],
				fetchUserListErr: true
			};

		case types.FETCH_USER:
			return {
				...state,
				user: action.payload,
				fetchUserListErr: false
			};

		case types.FETCH_USER_ERR:
			return {
				...state,
				user: {},
				fetchUserErr: true
			};

		case types.DELETE_USER_ERR:
			return {
				...state,
				deleteUserErr: true
			};

		case types.DELETE_USER:
			return {
				...state,
				deleteUserErr: false
			};


		default:
			return { ...state };
	}
}

export default landingReducer;

