import React from 'react';
import {View} from 'react-native';
import TodoList from '../todo/TodoList';
import TodoForm from '../todo/TodoForm';

export default function TodosScreen({navigation}) {
  const {navigate} = navigation;

  const handleClickTodoItem = (todoId) => {
    navigate('TodoDetail', {todoId: todoId});
  };

  const handleClickEditTodo = (todoId) => {
    navigate('TodoEditor', {todoId: todoId});
  };

  return (
    <View>
      <TodoForm initialValue={null} />
      <TodoList
        handleClickTodoItem={handleClickTodoItem}
        handleClickEditTodo={handleClickEditTodo}
      />
    </View>
  );
}
