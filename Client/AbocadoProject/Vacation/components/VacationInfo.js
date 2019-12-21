import React, { Component } from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import { Card, Button } from 'react-native-elements'

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
    const url = "http://testabocado.ml:8000/vacations/info";

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
    return (
      <View style={styles.container}>
        <Card>

        </Card>
        <View>
          <Card></Card>
          <Card></Card>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  }
})



