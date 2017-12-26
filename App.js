import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import SplashComponent from './app/pages/splash.page';
import HomePage from './app/pages/home.page';
import DeckDetailPage from './app/pages/deck-detail.page';
import {StackNavigator} from 'react-navigation';


const Navigation = StackNavigator({
    Home: {
      screen: SplashComponent,
      header: { visible: false }
    },
    HomeApplication: { screen: HomePage, header: {visible: false}},
  }, {
    navigationOptions: {
      header: null
    }
  }
);

class App extends React.Component {

  render() {
    return (
      <Navigation/>
    );
  }

}

const styles = StyleSheet.create({});


export default App;