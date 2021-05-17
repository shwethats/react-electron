import http from '../utils/http';

export function fetchUser( payload ) {
	return http.get( 'user', { params: payload } );
}

export function fetchAllUsers() {
	return http.get( '/users' );
}

export function deleteUser( payload ) {
	return http.delete( '/delete/', { params: payload } );
}
