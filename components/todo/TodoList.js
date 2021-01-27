/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {List, Divider} from '@ui-kitten/components';
import TodoItem from './TodoItem';
import {fetchTodo} from '../../redux/actions/todoAction';

export default function TodoList(props) {
  const {handleClickTodoItem} = props;

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const handleFetchTodo = () => dispatch(fetchTodo());
  const renderTodoItem = ({item}) => (
    <TodoItem item={item} handleClickTodoItem={handleClickTodoItem} />
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
