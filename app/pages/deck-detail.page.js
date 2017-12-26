import React from "react";
import { Animated, Text, View, Image, StyleSheet } from "react-native";

class DeckDetailPage extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  };

  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text> Detail </Text>
      </View>
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

export default DeckDetailPage;
