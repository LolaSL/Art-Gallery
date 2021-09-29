import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n/i18n';
import './index.scss';
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/firestore';

const firebaseApp = {
        apiKey: "AIzaSyDIYhwqJ6wHLVIYRSjMNawgfJ_uCRGoqrk",
        authDomain: "gallery-art-9bcd7.firebaseapp.com",
        databaseURL: "https://gallery-art-9bcd7-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "gallery-art-9bcd7",
        storageBucket: "gallery-art-9bcd7.appspot.com",
        messagingSenderId: "302817637057",
        appId: "1:302817637057:web:fc21e9efa98e8f59f95a40"
};

firebase.initializeApp(firebaseApp);
export const db = firebase.database();




ReactDOM.render(
        <React.StrictMode>
                <App />
        </React.StrictMode>
        ,
        document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
