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
    this.state = {}
  }

  buttonPressed = text => {
    console.log(text)
  }

  render() {
    let ops = ['+', '-', '*', '/']
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
          <Text style={styles.resultText}>11*11</Text>
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
              ops.map( item => {
                return (
                  <TouchableOpacity style={styles.btn}>
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
    backgroundColor: 'red',
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

