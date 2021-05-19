import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserIdentification } from './src/screens/UserIdentification';


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#FFF' } }}>


        <stack.Screen name="UserIdentification" component={UserIdentification} />

      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
