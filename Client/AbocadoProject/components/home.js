import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
 constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      base_url: "http://testabocado.ml:8000/vacations/"
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

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => { return (
            <ListItem
              title={item.title}
              titleStyle={{ fontSize: 16}}
              titleContainerStyle = {{ marginLeft: 120 }}
              subtitle={<View style={styles.subtitleView}>
                        <Text style={styles.menuText}>{item.start_date}</Text>
                        <Text style={styles.menuText}>{item.end_date}</Text></View>}
              containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
            />)}
          }
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({

});