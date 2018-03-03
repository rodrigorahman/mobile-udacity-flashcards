import React from "react";
import {  Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';


class DeckDetailPage extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  };

  state = {}

  componentDidMount() {

  }

  answerQuiz = () =>  {
    const { navigate } = this.props.navigation;
    navigate('AnswerQuiz', {})
  }

  openAddCard = () => {
    const { navigate } = this.props.navigation;
    navigate('AddCardInDeck', {});
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={{flex: 2, justifyContent: 'center',}}>
          <Text style={styles.deckTitle}> Nome do deck </Text>
          <Text style={styles.totalCads}> 0 cards </Text>
        </View>
        <View>
          <Button
            raised
            icon={{name: 'note-add', color:'#000', type:'Entypo'}}
            containerViewStyle={styles.containerViewButton}
            buttonStyle={styles.addCardButton}
            textStyle={{color: '#000'}}
            title='Add Card'
            onPress={this.openAddCard} />

          <Button
            containerViewStyle={styles.containerViewButton}
            icon={{name: 'question-answer'}}
            title='Start Quiz'
            buttonStyle={styles.quizButton}
            onPress={this.answerQuiz}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  card: {},

  deckTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign:'center'
  },
  totalCads: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C0C0C0',
    textAlign:'center'
  },
  containerViewButton: {
    marginBottom: 10
  },
  addCardButton: {
    backgroundColor: '#fff'
  },
  quizButton: {
    backgroundColor: '#2B97F0'
  }


});

export default DeckDetailPage;
