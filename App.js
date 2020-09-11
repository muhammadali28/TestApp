import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
    Image,
    TextInput,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from "./components/Reducers/main";
import AppContainer from "./navigation";

export default class App extends React.Component {

    render(){
        const state = createStore(reducers, {},applyMiddleware(ReduxThunk))
        return(
            <Provider store={state}>
                <AppContainer/>
            </Provider>

        )
    }
}

