import axios from 'axios';


import qs from 'qs';

const originalXHRSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function ( ...args ) {
  this.withCredentials = false;
  return originalXHRSend.apply( this, args );
};

const http = axios.create({
  baseURL: 'http://localhost:3000/react-electron/',
  responseType: 'json',
  withCredentials: false
});

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
