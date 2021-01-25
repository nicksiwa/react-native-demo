import React from 'react';
import {View} from 'react-native';
import TodoList from '../todo/TodoList';

export default function TodosScreen({navigation}) {
  const {navigate} = navigation;

  const handleClickTodoItem = (todoId) => {
    navigate('TodoDetail');
  };

  return (
    <View>
      <TodoList handleClickTodoItem={handleClickTodoItem} />
    </View>
  );
}
