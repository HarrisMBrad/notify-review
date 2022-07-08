import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AllNotes({ navigation, AppState }) {

      const { allNotes, setNote } = AppState;
      console.log(AppState);
      const handlePress = (element) => {
            setNote(element);

            navigation.navigate('Note');

      }

      return (
            <View style={styles.screens}>
                  {allNotes.map((e, i) => {
                        return (
                              <TouchableOpacity onPress={() => handlePress(e)}
                                    style={styles.button}
                              >
                              <Text key={i}>{e.noteTitle }</Text>
                              </TouchableOpacity>
                        )      
                  }) }
                  
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