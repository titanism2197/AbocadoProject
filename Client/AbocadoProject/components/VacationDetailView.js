import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native"
import { Card } from 'react-native-elements'


export default class VacationDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : {
          annual : 0,
           
        },
      };
  }
  
  /**************************************************************************/
  /* function which output detail */

  _getAnnual = () => { // Annual TextInput, 값 없으면 에러 안나게. 
    let annual = []
    if(this.props.item.annual.length!=0) {
      annual.push( <TextInput  
      placeholder={this.props.item.annual[0].day + '일'}
      placeholderTextColor='black'
      underlineColorAndroid='transparent'  
      style={[styles.textInput, styles.dayInput]} 
      keyboardType={'numeric'}/>)
    }
    else annual.push( <TextInput  
        placeholder={0 + '일'}
        placeholderTextColor='black'
        underlineColorAndroid='transparent'  
        style={[styles.textInput, styles.dayInput]} 
        keyboardType={'numeric'}/>)
    
    return annual
  } 

  _getConsolation = () => {  // consolation TextInput
    let consolation = []
    for(let i=0; i<this.props.item.consolation.length; i++) {
        consolation.push( 
          <View style={styles.detailContainer}>
            <TextInput  
              placeholder={this.props.item.consolation[i].day + '일'}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.dayInput]} 
              keyboardType={'numeric'}/>
            <TextInput  
              placeholder={this.props.item.consolation[i].title}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.titleInput]}/>
          </View> 
      )
    }
    return consolation
  }

  _getPrize = () => {  // Prize TextInput
    let prize = []
    for(let i=0; i<this.props.item.prize.length; i++) {
        prize.push( 
          <View style={styles.detailContainer}>
            <TextInput  
              placeholder={this.props.item.prize[i].day + '일'}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.dayInput]} 
              keyboardType={'numeric'}/>
            <TextInput  
              placeholder={this.props.item.prize[i].title}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.titleInput]}/>
          </View> 
      )
    }
    return prize
  }

  _getReward = () => {  // Prize TextInput
    let reward = []
    for(let i=0; i<this.props.item.reward.length; i++) {
        reward.push( 
          <View style={styles.detailContainer}>
            <TextInput  
              placeholder={this.props.item.reward[i].day + '일'}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.dayInput]} 
              keyboardType={'numeric'}/>
            <TextInput  
              placeholder={this.props.item.reward[i].title}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.titleInput]}/>
          </View> 
      )
    }
    return reward
  }

  _getPetition = () => {  // Prize TextInput
    let petition = []
    for(let i=0; i<this.props.item.petition.length; i++) {
        petition.push( 
          <View style={styles.detailContainer}>
            <TextInput  
              placeholder={this.props.item.petition[i].day + '일'}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.dayInput]} 
              keyboardType={'numeric'}/>
            <TextInput  
              placeholder={this.props.item.petition[i].title}
              placeholderTextColor='black'
              underlineColorAndroid='transparent'  
              style={[styles.textInput, styles.titleInput]}/>
          </View> 
      )
    }
    return petition
  }

/**************************************************************************/


  render() {
    return ( //DetailView flatlist로 구현하기
      <Card containerStyle={styles.container}>
        <View style={styles.category}>
          <Text style={styles.title}>연가</Text>
          <View>{this._getAnnual()}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>위로휴가</Text>
          <View>{this._getConsolation()}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>포상휴가</Text>
          <View>{this._getPrize()}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>보상휴가</Text>
          <View>{this._getReward()}</View>
        </View>
        <View style={styles.category}>
          <Text style={styles.title}>청원휴가</Text>
          <View>{this._getPetition()}</View>
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
  detailContainer:{
    flexDirection: 'row',
  },
  textInput: {
    textAlign: 'center',
    height: 30,
    borderRadius: 5,  
    borderWidth: 0.5,  
    borderColor: 'gray',
  },
  dayInput: {  
    width: 40,
  },
  titleInput: {  
    width: 250,
    marginLeft: 10,
  },
})
