import React from "react";
import { Animated, Text, View, Image, StyleSheet } from "react-native";



class SplashComponent extends React.Component {
  
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    const {navigate} = this.props.navigation;
    
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start(this.onComplete);
  }

  onComplete = () => {
    let { navigate } = this.props.navigation;
    navigate('HomeApplication', {});
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
        <Text style={styles.textLogotipo}>Mobile FlashCards</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  contentLogo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
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

export default SplashComponent;
