import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TypeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card containerStyle={styles.container} wrapperStyle={{padding:0}}>
                <View style={styles.item}>                
                    <View style={styles.day}>
                        <Text style={styles.content}>{this.props.item.day}</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.text}>{this.props.item.title}</Text>
                    </View>
                </View>
            </Card>
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
    
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    day:{
        flex: 1,
    },

    content: {
        fontSize: 25,
    },

    title: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    text: {
        fontSize: 17,
    },
})
