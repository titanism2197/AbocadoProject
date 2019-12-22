import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Dimensions } from 'react-native';
import VacationList from './Vacation/components/VacationList';
import VacationInfo from './Vacation/components/VacationInfo';


const { height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1}}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
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
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  vacationList: {
    flex: 3,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 50,
  },

  vacationInfo: {
    height: 190,
  },
})