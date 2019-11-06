import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import VacationList from './components/VacationList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VacationList style={styles.vacationList}/>
        <View style={styles.nothing}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vacationList: {
    flex: 1,
  },
  nothing: {
    flex: 9,
  },
})