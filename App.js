import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firstScreen from './components/screens/firstScreen';
import secondScreen from './components/screens/secondScreen';

console.disableYellowBox = true;

const Stack = createStackNavigator();

function App(){

  return (
    <NavigationContainer>

      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="First" component={firstScreen} />
        <Stack.Screen name="Second" component={secondScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;