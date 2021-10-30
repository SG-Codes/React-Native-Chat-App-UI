import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Telegram',
            headerLeft: () => (
              <Icon
                name="menu"
                size={31}
                color="#000"
                style={{marginRight: 10}}
              />
            ),
            headerRight: () => (
              <Icon
                name="search"
                size={25}
                style={{marginRight: 10}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
