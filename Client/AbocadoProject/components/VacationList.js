import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import VacationItem from './VacationItem';

export default class VacationList extends Component {
 constructor(props) {
    super(props);
    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
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
          error: null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
  };

  _renderItem = ({item}) => {
    return (
    <VacationItem 
      days={item.days}
      start_date={item.start_date}
      end_date={item.end_date}
    />)
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}