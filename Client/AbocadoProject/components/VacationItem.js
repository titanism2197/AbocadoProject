import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native"


export default class VacationItem extends Component {
    render() {
      return (
        <View style={styles.vacationItem}>
          <View style={styles.text}>
            <Text>{this.props.days}</Text>
            <Text>{this.props.start_date}</Text>
            <Text>{this.props.end_date}</Text>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    vacationItem: {

    },
    
    text: {

    }
})