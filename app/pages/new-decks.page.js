import React from "react";
import {ScrollView, StyleSheet, Text, Image} from "react-native";
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class NewDecks extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'New Deck',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='file-o' style={{color: tintColor}}/>
    ),
  };


  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <ScrollView>
        <Card
          title='HELLO WORLD'
          image={require('@images/128.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'/>
        </Card>
        <Card
          title='HELLO WORLD'
          image={require('@images/128.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'/>
        </Card>
        <Card
          title='HELLO WORLD'
          image={require('@images/128.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'/>
        </Card>

      </ScrollView>
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

export default NewDecks;
