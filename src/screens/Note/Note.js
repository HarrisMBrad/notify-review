import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Note({ navigation, AppState }) {

      const { note } = AppState;
      //console.log(AppState);


      return (
            <View style={styles.screens}>
                  <Text>{note.noteTitle}</Text>
                  <Text>{note.noteText}</Text>
            </View>
      )

}
 
const styles = StyleSheet.create({
      screen: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
      },
      button: {
            margin: 20,
            padding: 20,
            borderWidth: 2
      }
})