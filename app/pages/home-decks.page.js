import React from "react";
import {ScrollView, StyleSheet, Text, Image} from "react-native";
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeDecks extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Decks',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list-ul' style={{color: tintColor}}/>
    ),
  };


  state = {}

  componentDidMount() {

  }

  goDetail = () => {
    const { navigate } = this.props.navigation;
    navigate('Detail', {})
    console.log('clicado')
  }


  render() {
    return (
      <ScrollView>
        <Card
          title='Tem detalhe'
          image={require('@images/128.jpg')}>
          <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
            Descrição do Deck
          </Text>
          <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 30, color: '#c0c0c0'}}>
            3 Cards
          </Text>
          <Button
            onPress={this.goDetail}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View Deck'/>
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

export default HomeDecks;
