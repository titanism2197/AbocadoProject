import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class VacationType extends Component {
  
  onPress = () => {
    this.props.navigation.navigate('Type')
    console.log('works')
  }

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.column1}>
              <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={this.onPress}>
                  <Text style={styles.text}>연가</Text>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.column2}>
              <View style={styles.row}>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.text}>위로</Text>
                  </TouchableOpacity>
                </Card>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.text}>포상</Text>
                  </TouchableOpacity>
                </Card>             
              </View>
              <View style={styles.row}>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.text}>보상</Text>
                  </TouchableOpacity>
                </Card>
                <Card containerStyle={styles.card}>
                  <TouchableOpacity onPress={this.onPress}>
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

export default withNavigation(VacationType);