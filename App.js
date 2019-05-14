/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,BackHandler} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {LoginStack} from "./app/navigation/nav";
import { Provider } from 'react-redux';
import store from "./app/store/store";

const AppContainer = createAppContainer(LoginStack);

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.currentState ="Login";
  }
  _getCurrentRouteName = navState => {
    if (navState.hasOwnProperty("index")) {
    this._getCurrentRouteName(navState.routes[navState.index]);
    } else {
    // console.log("_getCurrentRouteName", navState.routeName);
    this.currentState = navState.routeName;
    }
    };

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
  
    handleBackPress = () => {
      // alert(this.currentState);
      if(this.currentState =="Login"){
        return true;
      }else{
        BackHandler.exitApp();
      }
    }
  render() {
    return (
      <Provider store = { store }>
         <AppContainer onNavigationStateChange={(prevState, currentState) => {
this._getCurrentRouteName(currentState);
}}/>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
