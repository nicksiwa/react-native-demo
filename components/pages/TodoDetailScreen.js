/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import {Card, Layout} from '@ui-kitten/components';
import {TODO} from '../../redux/actionTypes';

export default function TodoDetailScreen({route}) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const {todoId} = route.params;
  const {currentTodo} = todo;

  useEffect(() => {
    dispatch({
      type: TODO.GET_TODO_BY_ID_REQUEST,
      id: todoId,
    });
  }, []);

  return (
    <Layout>
      <Card>
        <Text>{currentTodo && currentTodo.title}</Text>
        <Text>
          {currentTodo && currentTodo.completed ? 'Completed' : 'Incomplete'}
        </Text>
      </Card>
    </Layout>
  );
}
