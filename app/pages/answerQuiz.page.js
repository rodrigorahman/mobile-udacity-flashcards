import React from "react";
import {  Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';


class AnswerQuizPage extends React.Component {

  static navigationOptions = {
    title: 'Quiz'
  };

  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.content}>
        <View style={{marginTop: 10, marginLeft: 5}} >
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>1/2</Text>
        </View>
        <View style={{
            flex: 2, 
            alignItems: 'center',
            justifyContent: 'center'}}>
          <Text style={{marginLeft: 5, marginRight: 5, fontSize: 40, textAlign: 'center'}}>teste bla teste bla teste bla teste bla teste bla teste bla teste bla teste bla teste bla teste bla teste bla teste bla  ?</Text>
          <Text style={{fontSize: 30, color: 'red', fontWeight: 'bold'}}>Answer</Text>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <Button
            icon={{name: 'thumb-up', color:'#000', type:'Entypo'}}
            containerViewStyle={styles.containerViewButton}
            buttonStyle={styles.correctButton}
            textStyle={{color: '#000'}}
            title='Correct' />

          <Button
            containerViewStyle={styles.containerViewButton}
            icon={{name: 'thumb-down'}}
            title='Incorrect'
            buttonStyle={styles.incorrectButton}/>
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
  correctButton: {
    backgroundColor: '#00CC00',
    borderRadius: 10,
    height: 70
  },
  incorrectButton: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    height: 70
  }

});

export default AnswerQuizPage;
