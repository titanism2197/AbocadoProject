import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default class VacationType extends Component {
  constructor(props) {
    super(props);
  }
  
  onPress = (type_of_detail) => {
    this.props.navigation.navigate('VacationTypeDetail', {type_of_detail: type_of_detail})
    console.log('works')
  }

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.column1}>
              <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={this.onPress("ANN")}>
                  <Text style={styles.text}>연가</Text>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.column2}>
              <View style={styles.row}>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress("CON")}>
                    <Text style={styles.text}>위로</Text>
                  </TouchableOpacity>
                </Card>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress("PR")}>
                    <Text style={styles.text}>포상</Text>
                  </TouchableOpacity>
                </Card>             
              </View>
              <View style={styles.row}>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress("RE")}>
                    <Text style={styles.text}>보상</Text>
                  </TouchableOpacity>
                </Card>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress("PE")}>
                    <Text style={styles.text}>청원</Text>
                  </TouchableOpacity>
                </Card>             
              </View>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginRight: 30,
  },
  column1: {
    flex: 1,
  },
  column2: {
    flex: 2,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  }
})