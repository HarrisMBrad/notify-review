import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllNotes from '../screens/AllNotes/AllNotes';
import AppState from '../AppState/AppState';
import Note from '../screens/Note/Note';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }) {
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen name="AllNotes" options={{ headerShown: false }} >
                              {props => <AllNotes {...props} AppState={ AppState } />}
                        </Stack.Screen>
                        
                        <Stack.Screen name="Note" options={{ headerShown: false }} >
                              {props => <Note {...props} AppState={AppState} />}

                        </Stack.Screen>
                        <AppState>
                              <Stack.Screen name="Screen3">
                              </Stack.Screen>
                        </AppState>
                  </Stack.Navigator>
            </NavigationContainer>
      );
}
// Why will AppState not render? 