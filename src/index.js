import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB3M9fHVOHoGBE6UGo28lu8vGU6JLPLmyI",
  authDomain: "testing-databases-7484a.firebaseapp.com",
  databaseURL: "https://testing-databases-7484a.firebaseio.com",
  projectId: "testing-databases-7484a",
  storageBucket: "testing-databases-7484a.appspot.com",
  messagingSenderId: "358752824231"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
