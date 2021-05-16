import axios from 'axios';

import { API_BASE_URL, API_VERSION } from 'src/config';

import qs from 'qs';

const originalXHRSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function ( ...args ) {
  this.withCredentials = false;
  return originalXHRSend.apply( this, args );
};

const http = axios.create( {
  baseURL: API_BASE_URL + API_VERSION,
  responseType: 'json',
  withCredentials: false
} );

http.interceptors.request.use(
  config => {
    config.headers[ 'X-Request-By' ] = 'axios';
    config.data = qs.stringify( config.data );
    return config;
  },
  error => {
    return Promise.reject( error );
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject( error );
  }
);

export default http;
