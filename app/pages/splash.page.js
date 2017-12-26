import React from "react";
import { Animated, Text, View, Image, StyleSheet } from "react-native";
import {NavigationActions} from "react-navigation";

class SplashComponent extends React.Component {
  
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start(this.onComplete);
  }

  onComplete = () => {
    let { dispatch } = this.props.navigation;
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeApplication' })
      ]
    }))
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
