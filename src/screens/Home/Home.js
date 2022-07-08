import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import AppState from '../../AppState/AppState';
import _allnotes from '../../../assets/_allnotes.png';

export default function Home(AppState) {
      const { allNotes, setNote } = AppState;
      //

      return (
            <View style={styles.screen}>
                  {allNotes.map((e, i) => { 
                        return <Text key={i}>{e.setNote}</Text>;
                  })}
                   <AppState>
                        <Text style={styles.screen}>
                              Hello-World</Text>
                  </AppState>
                  <Card style={styles.screen}></Card>
            </View>
      )

}

const styles = StyleSheet.create({
      screen: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#ecf0f1',
            padding: 8,
      },

})