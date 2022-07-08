import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';
import Note from './src/screens/Note/Note';
import AllNotes from './src/screens/AllNotes/AllNotes';


// Left off w/ apple registration as there may be a limitation on the amount to enable from apple at any given time... 
// ... asked for help for adding and or enabling for more keys for app build react native for note chat with Notes...
// Expo Go mobile testing and easy review snacks for testing application at small scale. 07/08/2022  - Brad 

export default function App(AppState) {
  registerNNPushToken(3069, 'kx5zc6Uop2devBkDFtITXS')
 

  return (
    <><View style={styles.container}>
      <View>
       <Text style={styles.input}>Home Page</Text>
      </View>
      <StatusBar style="auto" />
      {AllNotes.map((e, i) => {

        return <Text>{e.AllNotes}</Text>

      })}
      <Note>
      
        <Constants>
          <Text>Hello-Test-Constant</Text>
        </Constants>
      </Note>
      <AppState />
    </View></>
  
  );

};

registerRootComponent(App);