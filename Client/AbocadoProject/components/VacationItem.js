import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import VacationDetail from './VacationDetail';

export default class VacationItem extends Component {
  render() {
    return (
        <Card containerStyle={styles.container}>
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
          <View style={styles.btnContainer}>
            <Button 
              title="Detail"
              buttonStyle={styles.detailBtn}
            />
          </View>
          {
            this.state.expanded &&
            <VacationDetail 
              key={this.props.key}
            />
          }
        </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 15,
  },

  day:{
    alignItems: 'center',
    paddingBottom: 10,
  },

  dday:{
    alignItems: 'center',
    paddingBottom: 10,
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
    marginHorizontal: 30,
    paddingBottom: 15,
  },

  text: {
    fontSize: 20,
  },
  
  btnContainer:{
     flexDirection: 'row',
    justifyContent: 'space-around',
  },

  detailBtn: {
      width: 100,
  }
})
