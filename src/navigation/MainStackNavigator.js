import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Quiz from '../screens/Quiz';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: '#101010'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
          }}
          headerMode='float'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home Screen' }}
          />
          <Stack.Screen
            name='Quiz'
            component={Quiz}
            options={({ route }) => ({
              title: route.params.item.name
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  export default MainStackNavigator;