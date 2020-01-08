import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { registerServiceWorker } from "./register-sw";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import advertiseReducer from './components/Reducers/AdvertiseReducer/AdvertiseReducer';
import NotificationReducer from './components/Reducers/Notification/NotificationReducer';



const reducer = combineReducers({
    advertise:advertiseReducer,
    notifications:NotificationReducer
})


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

 


const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
const app = <Provider store={store}><App/></Provider>

registerServiceWorker();
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register(firebaseMessagingSw)
// serviceWorker.unregister()

