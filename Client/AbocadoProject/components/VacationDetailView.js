import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card } from 'react-native-elements'


export default class VacationDetailView extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let consolation = []
    let prize = []
    let reward = []
    let petition = []

    for(let i=0; i<this.props.item.consolation.length; i++) {
      consolation.push(
        <Text style={styles.detail}>{this.props.item.consolation[i].title} : {this.props.item.consolation[i].day} 일</Text>  
      )
    }
    for(let i=0; i<this.props.item.prize.length; i++) {
      prize.push(
        <Text style={styles.detail}>{this.props.item.prize[i].title} : {this.props.item.prize[i].day} 일</Text>  
      )
    }
    for(let i=0; i<this.props.item.reward.length; i++) {
      reward.push(
        <Text style={styles.detail}>{this.props.item.reward[i].title} : {this.props.item.reward[i].day} 일</Text>  
      )
    }
    for(let i=0; i<this.props.item.petition.length; i++) {
      petition.push(
        <Text style={styles.detail}>{this.props.item.petition[i].title} : {this.props.item.petition[i].day} 일</Text>  
      )
    }

    return ( //DetailView flatlist로 구현하기
      <Card containerStyle={styles.container}>
        <View style={styles.category}>
          <Text style={styles.title}>연가</Text>
          <Text style={styles.detail}>{this.props.item.annual[0].day} 일</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>위로휴가</Text>
          <View>{consolation}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>포상휴가</Text>
          <View>{prize}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>보상휴가</Text>
          <View>{reward}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>청원휴가</Text>
          <View>{petition}</View>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 15,
    marginTop: 0,
  },
  category: {
    marginBottom: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 20,
    paddingBottom: 10, 
  },
  detail: {
    fontSize: 15,
  }
})
