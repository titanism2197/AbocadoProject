import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card } from 'react-native-elements'

export default class VacationItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.item}>
          <View style={styles.day}>
            <Text style={styles.content}>{this.props.days} 일</Text>
          </View>
          <View style={styles.dday}>
            <Text style={styles.content}>D-{this.props.dday}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.date}>
              <Text style={styles.text}>출발</Text>
              <Text style={styles.text}>{this.props.start_date}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.text}>복귀</Text>
              <Text style={styles.text}>{this.props.end_date}</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: 350,
  },

  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

  day:{
    alignItems: 'center',
  },

  dday:{
    alignItems: 'center',
  },

  content: {
    fontSize: 30,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  date: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 17,
  },
})
