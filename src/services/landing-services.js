import http from 'src/utils/http';

export function fetchUser( payload ) {
	return http.get( '/v1/get/iw/pending/cheque', { params: payload } );
}

export function fetchAllUsers() {
	return http.get( '/v1/get/iw/pending/cheques/list' );
}

export function deleteUser( payload ) {
	return http.delete( '/v1/get/iw/pending/cheques/list', { params: payload } );
}
