import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default class VacationDetailView extends Component {
  constructor(props) {
      super(props);
      this.state  = {
        loading: false,
        data: [],
      }
    }

    componentDidMount() {
        this.fetchDataFromApi(this.props.navigation.getParam('id', 'default'));
    }

  fetchDataFromApi = (pk)  => {
    let url = "http://testabocado.ml:8000/vacations/" + pk + "/";

    this.setState({ loading: true });

    fetch(url)
    .then(res => res.json())
    .then(res => {
          this.setState({
            data: res,
          });
          console.log(this.state.data)
    })
    .catch((error) => {
          console.log(error);
    });
  };

  render() {
    let dDay = []
    let dday = this.props.navigation.getParam('dday', 'default')
    if(dday < 0) {
      dday = dday * -1
      dDay.push(<Text style={styles.content}>D+{dday}</Text>)
    }
    else dDay.push(<Text style={styles.content}>D-{dday}</Text>)

    let detail = []
    for(let d=0; d<this.state.data.detail.length; d++) {
      detail.push(
        <Card style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{flex: 1, fontSize: 20}}>{this.state.data.detail[d].day}</Text>
          <Text style={{flex: 3, fontSize: 17}}>{this.state.data.detail[d].title}</Text>
        </Card>
      )
    }

    return (
        <View style={{ flex: 1 }}>
          <Card containerStyle={styles.card} wrapperStyle={{padding:0}}>
            <View style={styles.day}>
              <Text style={styles.content}>{this.props.item.day} 일</Text>
            </View>
            <View style={styles.dday}>
              {dDay}
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
          </Card>
          <View style={{ flex: 1, flexDirection: "row" }}>
            { detail }
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 0,
    width: 310,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'gray',
    marginRight: 3,
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
    fontSize: 25,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
    
  date: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 15,
  },

  text: {
    fontSize: 17,
  },
})

