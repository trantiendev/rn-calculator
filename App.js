import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.ops = ['DEL','+', '-', '*', '/']
  }

  calculateResult = () => {
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }

  validate = () => {
    const text = this.state.resultText

    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }

    return true
  }

  buttonPressed = text => {
    if (text === '=') {
      return this.validate() && this.calculateResult()
    }

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
          <TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])}>
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
        <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
    fontSize: 32,
  },
  calculationText: {
    fontSize: 28,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  btnText: {
    fontSize: 30,
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20
  },
  calculation: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#636363'
  },
  white: {
    color: '#fff'
  }
});

