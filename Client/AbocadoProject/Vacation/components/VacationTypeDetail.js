import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default class VacationTypeDetail extends Component {
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

    fetchDataFromApi = (type_of_detail)  => {
        const url = "http://testabocado.ml:8000/vacations/type";

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
            <Text>This is VacationTypeDetail</Text>
        )
    }
}