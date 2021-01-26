import React, {useEffect, useState} from 'react';
import {List, Divider} from '@ui-kitten/components';
import {getTodos} from '../../services';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const {handleClickTodoItem} = props;
  const [todos, setTodos] = useState([]);

  const renderTodoItem = ({item}) => (
    <TodoItem item={item} handleClickTodoItem={handleClickTodoItem} />
  );

  useEffect(() => {
    const handleGetTodos = async () => {
      try {
        const res = await getTodos();
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleGetTodos();
  }, []);

  return (
    <List
      data={todos}
      renderItem={renderTodoItem}
      ItemSeperatorComponent={Divider}
    />
  );
}
