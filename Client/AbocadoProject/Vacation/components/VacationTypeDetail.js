import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements'
import TypeItem from './TypeItem';

export default class VacationTypeDetail extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            loading: false,
            data: [],
        }
    }

    componentDidMount() {
        this.fetchDataFromApi(this.props.navigation.getParam('type_of_detail', 'default'));
    }

    fetchDataFromApi = (type_of_detail)  => {
        const url = "http://testabocado.ml:8000/vacations/type/";

        this.setState({ loading: true });

        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type_of_detail: type_of_detail,
            })
        })
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

    _renderItem = ({item}) => {
    return <TypeItem item={item}/>
    };

    render() {
        return (
            <View>
                <Text>This is VacationTypeDetail</Text>
                <Text>{JSON.stringify(this.props.navigation.getParam('type_of_detail', 'default'))}</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
                />
                <Button title='go back' onPress={() => {this.props.navigation.goBack()}}/>
            </View>
        )
    }
}