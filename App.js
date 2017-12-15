import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import SplashComponent from './app/pages/splash.page';
import HomePage from './app/pages/home.page';
import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator({
    Home: {
      screen: SplashComponent,
      header: {visible: false}},
    HomeApplication: {screen: HomePage, header: {visible: false}}
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFF',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    }
  }
);

const App = () => {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({});


export default App;