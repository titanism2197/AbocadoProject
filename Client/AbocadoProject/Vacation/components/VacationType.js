import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Card } from 'react-native';

export default class VacationType extends Component {
  render() {
      return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Card style={styles.card}>
                    <Text>연가</Text>
                </Card>
                <Card style={styles.card}>
                    <Text>위로</Text>
                </Card>
                <Card style={styles.card}>
                    <Text>포상</Text>
                </Card>
                <Card style={styles.card}>
                    <Text>보상</Text>
                </Card>
                <Card style={styles.card}>
                    <Text>포상</Text>
                </Card>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row', 
  },
  card: {
    flex: 1,
  }
})