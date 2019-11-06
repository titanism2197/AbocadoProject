import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VacationDetail extends Component {
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
      const url = "http://testabocado.ml:8000/vacations/${this.props.key}/";

      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({
            data: res,
          });
        })
    };

    
  render() {
    return ()
  }
}

const styles = StyleSheet.create({
})
