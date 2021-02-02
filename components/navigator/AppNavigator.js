import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodosScreen from '../pages/TodosScreen';
import TodoDetailScreen from '../pages/TodoDetailScreen';
import TodoEditScreen from '../pages/TodoEditScreen';

const {Navigator, Screen} = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Todos" component={TodosScreen} />
        <Screen name="TodoDetail" component={TodoDetailScreen} />
        <Screen name="TodoEditor" component={TodoEditScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
