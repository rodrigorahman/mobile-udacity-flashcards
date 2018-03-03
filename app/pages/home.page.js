import React from "react";
import {ScrollView, StyleSheet, Text, Platform, StatusBar, TabBarBottom, TabBarTop} from "react-native";
import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeDecks from './home-decks.page';
import NewDecks from './new-decks.page';
import DeckDetailPage from "./deck-detail.page";
import AnswerQuizPage from './answerQuiz.page';
import AddCardInDeck from './addCardInDeck.page';

const Tabs = TabNavigator({
  Decks: {
    screen: HomeDecks,
    navigationOptions: {
      headerTitle: 'Home Decks'
    }
  },
  NewDeck: {
    screen: NewDecks,
    navigationOptions: {
      headerTitle: 'New Decks'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#02b3e4',
    inactiveTintColor: '#c0c0c0',
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
  },
  swipeEnabled: true
});

const ScreenNavigator = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Detail: {
    screen: DeckDetailPage,
  },
  AnswerQuiz: {
    screen: AnswerQuizPage
  },
  AddCardInDeck: {
    screen: AddCardInDeck
  }
}, {
  navigationOptions: {
    headerStyle: {
      ...Platform.OS === 'ios' ? {
          backgroundColor: '#FFF',
        } : {
          backgroundColor: '#FFF',
          paddingTop: StatusBar.currentHeight,
          height: StatusBar.currentHeight + 60,
        }
      ,


    }
  }
});


class HomePage extends React.Component {

  state = {};

  componentDidMount() {

  }

  render() {
    return (
      <ScreenNavigator/>
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
