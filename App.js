import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppState from './src/AppState/AppState';
import registerNNPushToken from 'native-notify';
import Note from './src/screens/Note/Note';


export default function App() {
  registerNNPushToken(3069, 'kx5zc6Uop2devBkDFtITXS')
  

  return (

    <AppState />
  
  )
};
