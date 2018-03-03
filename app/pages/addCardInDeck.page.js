import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, ButtonGroup, FormLabel, FormInput } from 'react-native-elements'


class AddCardInDeck extends React.Component {

  static navigationOptions = {
    title: 'Add Card'
  }

  state = {
    selectedQuestionTypeIndex: 0,
    selectedAnswerIndex: 0,
  }

  updateQuestionTypeIndex = (selectedQuestionTypeIndex) => {
    this.setState({selectedQuestionTypeIndex})
  }

  updateAnswerIndex = (selectedAnswerIndex) => {
    this.setState({selectedAnswerIndex})
  }

  componentDidMount() {

  }
  
  render() {
  
    const {selectedQuestionTypeIndex, selectedAnswerIndex} = this.state

    return (
      <View style={styles.content}>
        <FormLabel>Question</FormLabel>
        <FormInput />

        <FormLabel>Question Type</FormLabel>
        <ButtonGroup
          onPress={this.updateQuestionTypeIndex}
          selectedIndex={selectedQuestionTypeIndex}
          buttons={['Boolean Answer', 'Text Answer']}
          containerStyle={{height: 40}} />
        
        <FormLabel>Answer</FormLabel>
        {selectedQuestionTypeIndex == 0 &&
          <ButtonGroup
            onPress={this.updateAnswerIndex}
            selectedIndex={selectedAnswerIndex}
            buttons={['Correct', 'Incorrect']}
            containerStyle={{height: 40}} />
        }
        {selectedQuestionTypeIndex == 1 &&
            <FormInput />
        }

        <Button
            containerViewStyle={{marginTop: 50}}
            icon={{name: 'thumb-up'}}
            title='Save'
            buttonStyle={styles.saveButton}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#00CC00',
    borderRadius: 10,
    height: 70
  }
})

export default AddCardInDeck;