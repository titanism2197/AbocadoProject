import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Dimensions } from 'react-native';
import VacationList from './Vacation/components/VacationList';
import VacationInfo from './Vacation/components/VacationInfo';
import VacationType from './Vacation/components/VacationType';


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.vacationInfo}>
            <VacationInfo/>
          </View>
          <View style={styles.vacationList}>
            <View style={styles.listHeader}>
              <Button title="+"/>
            </View>
            <VacationList/>
          </View>
          <View style={styles.vacationType}>
            <VacationType/>
          </View>
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  vacationList: {
    flex: 1,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 50,
  },

  vacationInfo: {
    height: 180,
    marginBottom: 20,
  },

  vacationType: { 
    height: 180,
  },
})