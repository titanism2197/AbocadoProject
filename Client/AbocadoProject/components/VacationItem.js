import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import VacationDetailView from './VacationDetailView';

export default class VacationItem extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      expanded: false,
    }
  }

  _btnPressed = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  };

  render() {
    return (
        <View>
          <Card containerStyle={styles.container} wrapperStyle={{padding:0}}>
            <View style={styles.day}>
              <Text style={styles.content}>{this.props.item.day} 일</Text>
            </View>
            <View style={styles.dday}>
              <Text style={styles.content}>D-{this.props.dday}</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.date}>
                <Text style={styles.text}>출발</Text>
                <Text style={styles.text}>{this.props.item.start_date}</Text>
              </View>
              <View style={styles.date}>
                <Text style={styles.text}>복귀</Text>
                <Text style={styles.text}>{this.props.item.end_date}</Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button 
                title="Detail"
                buttonStyle={styles.detailBtn}
                onPress={this._btnPressed}
              />
            </View>
          </Card>
          {
            this.state.expanded &&
            <VacationDetailView
              item={this.props.item}
            />
          }
        </View>
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
