import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashComponent from './app/pages/splash.page';
import HomePage from './app/pages/home.page';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
  Home: {screen: SplashComponent, header: {visible: false}},
  HomeApplication: {screen: HomePage, header: {visible: false}}
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
