import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card } from 'react-native-elements'

export default class VacationItem extends Component {
  render() {
    return (
      <Card style={styles.item}>
        <Text style={styles.content}>{this.props.days} 일</Text>
        <Text style={styles.content}>{this.props.dday} 일</Text>
        <Text style={styles.content}>출발 : {this.props.start_date}</Text>
        <Text style={styles.content}>복귀 : {this.props.end_date}</Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  content: {
    fontSize: 30,
  }
})
