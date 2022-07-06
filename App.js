import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppState from './src/AppState/AppState';
import registerNNPushToken from 'native-notify';
import Note from './src/screens/Note/Note';


export default function App() {
  registerNNPushToken(3069, 'kx5zc6Uop2devBkDFtITXS')
  

  return (
    <><View style={styles.container}>
      <AppState>
        <StatusBar style="auto" />
        <Text>
          Open up and change me...
        </Text>
        <Note>
          <Text>
            Hello Homie.
          </Text>
        </Note>
      </AppState>
    </View><AppState /></>
  
  )
};
