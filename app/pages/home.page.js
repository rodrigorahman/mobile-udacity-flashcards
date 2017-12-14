import React from "react";
import { Animated, Text, View, Image, StyleSheet } from "react-native";

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null
  };

  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  }
  
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View
        style={[styles.contentLogo,
        {opacity: fadeAnim}]}>
        <Image
          style={styles.logotipo}
          source={require('@images/udacity-logo.png')} />
        <Text style={styles.textLogotipo}>Mobile FlashCards - HOME</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  contentLogo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logotipo: {
    width: 150,
    height: 150
  },
  textLogotipo: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HomePage;
