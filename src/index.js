import 'assets/css/bootstrap.min.css'
import 'assets/css/style.css'
import 'assets/css/homepage.css';
import 'assets/css/carousel.css';
import 'assets/css/vendor/bicon.min.css'
import 'assets/css/vendor/flaticon.css'
import 'assets/css/plugins/plyr.css'
import 'assets/css/plugins/slick.min.css'
import 'assets/css/plugins/nice-select.css'
import 'assets/css/plugins/perfect-scrollbar.css'
import 'assets/css/plugins/lightgallery.min.css'
import 'assets/css/path.css'

// components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from 'app/redux/store';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { 
  signOutUser, 
  setAuthenticated, 
  getUserData } from 'features/users/userSlice'


const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(signOutUser());
    window.location.href = '/login';
  } else {
    store.dispatch(setAuthenticated());
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>     
        <App />     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

