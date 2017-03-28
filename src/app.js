import React, { Component } from 'react';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Router from './router';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBTNcvcHJa-TbPCHYw7mM6SHLXmowPNK3w',
            authDomain: 'kindergarten-94ca4.firebaseapp.com',
            databaseURL: 'https://kindergarten-94ca4.firebaseio.com',
            storageBucket: 'kindergarten-94ca4.appspot.com',
            messagingSenderId: '663625178339'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
