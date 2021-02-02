/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {List, Divider} from '@ui-kitten/components';
import TodoItem from './TodoItem';
import {TODO} from '../../redux/actionTypes';

export default function TodoList(props) {
  const {handleClickTodoItem, handleClickEditTodo} = props;

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const handleFetchTodo = () => dispatch({type: TODO.FETCH_TODO_REQUEST});
  const renderTodoItem = ({item}) => (
    <TodoItem
      item={item}
      handleClickTodoItem={handleClickTodoItem}
      handleClickEditTodo={handleClickEditTodo}
    />
  );

  useEffect(() => {
    handleFetchTodo();
  }, []);

  if (todo.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <List
      data={todo.todos}
      renderItem={renderTodoItem}
      ItemSeperatorComponent={Divider}
    />
  );
}
