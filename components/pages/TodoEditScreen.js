/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import {TODO} from '../../redux/actionTypes';
import TodoForm from '../todo/TodoForm';

export default function TodoEditScreen({route, navigation}) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const {todoId} = route.params;
  const {currentTodo} = todo;

  const handleBackToTodoList = () => navigation.navigate('Todos');

  useEffect(() => {
    dispatch({
      type: TODO.GET_TODO_BY_ID_REQUEST,
      id: todoId,
    });
  }, []);

  if (todo.isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <Layout>
      <TodoForm
        initialValue={currentTodo}
        handleBackToTodoList={handleBackToTodoList}
      />
    </Layout>
  );
}
