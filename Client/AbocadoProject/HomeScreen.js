import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Dimensions } from 'react-native';
import VacationList from './Vacation/components/VacationList';


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
          <View style={styles.nothing}>
            <Text>This is HomeScreen.</Text>
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
    flex: 1,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 50,
  },

  nothing: {
    flex: 8,
  },
})