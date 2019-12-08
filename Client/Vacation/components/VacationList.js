import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import VacationItem from './VacationItem';

export default class VacationList extends Component {
  constructor(props) {
      super(props);
      this.state  = {
        loading: false,
        data: [],
      }
    }

  componentDidMount() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi = ()  => {
    const url = "http://testabocado.ml:8000/vacations/";

    this.setState({ loading: true });

    fetch(url)
    .then(res => res.json())
    .then(res => {
          this.setState({
            data: res,
          });
        })
    };

  _renderItem = ({item}) => {
    return (
    <VacationItem 
    dday={this._getDday(item.start_date)}
    item={item}
    />)
  };

  _getDday = (start_date) => { //휴가출발까지 남은 날짜 계산
    var now = new Date()
    var dday = new Date(start_date)
    var gap = now.getTime() - dday.getTime()
    var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1
    return result
  };

  render() {
    return (
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.id}
          horizontal='true'
        />
    );
  }
}

