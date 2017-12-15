import React from "react";
import {ScrollView, StyleSheet, Text, Platform, StatusBar} from "react-native";
import { TabNavigator } from 'react-navigation';
import HomeDecks from './home-decks.page';
import NewDecks from './new-decks.page';

const Tabs = TabNavigator({
  Decks: {
    screen: HomeDecks,
  },
  NewDeck: {
    screen: NewDecks
  },
}, {
  tabBarOptions: {
    activeTintColor: '#02b3e4',
    inactiveTintColor: '#02b3e4',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: '#02b3e4',
    },
    headerStyle: {

    }
  }
});

class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Decks',
    headerLeft: null,
  };

  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <Tabs/>
      // <ScrollView>
      //   <Card
      //     title='HELLO WORLD'
      //     image={require('@images/128.jpg')}>
      //     <Text style={{marginBottom: 10}}>
      //       The idea with React Native Elements is more about component structure than actual design.
      //     </Text>
      //     <Button
      //       icon={{name: 'code'}}
      //       backgroundColor='#03A9F4'
      //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      //       title='VIEW NOW'/>
      //   </Card>
      //   <Card
      //     title='HELLO WORLD'
      //     image={require('@images/128.jpg')}>
      //     <Text style={{marginBottom: 10}}>
      //       The idea with React Native Elements is more about component structure than actual design.
      //     </Text>
      //     <Button
      //       icon={{name: 'code'}}
      //       backgroundColor='#03A9F4'
      //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      //       title='VIEW NOW'/>
      //   </Card>
      //   <Card
      //     title='HELLO WORLD'
      //     image={require('@images/128.jpg')}>
      //     <Text style={{marginBottom: 10}}>
      //       The idea with React Native Elements is more about component structure than actual design.
      //     </Text>
      //     <Button
      //       icon={{name: 'code'}}
      //       backgroundColor='#03A9F4'
      //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      //       title='VIEW NOW'/>
      //   </Card>
      //
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 150,
    height: 150
  },
  card: {},

  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HomePage;
