import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultText: ''
    }
    this.ops = ['DEL','+', '-', '*', '/']
  }

  calculateResult = () => {

  }

  buttonPressed = text => {
    text === '=' && this.calculateResult()

    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate = operation => {
    switch(operation) {
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      default:
        const lastChar = this.state.resultText.split('').pop()
        console.log(lastChar)
        if (this.ops.indexOf(lastChar) > 0) return

        if(this.state.resultText === '') return
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    let rows = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push( 
          <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {
              this.ops.map((item, i) => {
                return (
                  <TouchableOpacity style={styles.btn} key={i} onPress={() => this.operate(item)}>
                    <Text style={[styles.btnText, styles.white]}>{item}</Text>
                  </TouchableOpacity>
                )
              }) 
            }
          </View>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize: 24,
    color: 'white'
  },
  calculationText: {
    fontSize: 20,
    color: 'white'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  btnText: {
    fontSize: 30
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: '#31394C',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },
  white: {
    color: '#fff'
  }
});

