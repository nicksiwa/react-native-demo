import React, {useEffect, useState} from 'react';
import {List, Divider} from '@ui-kitten/components';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const {handleClickTodoItem} = props;
  const [todos, setTodos] = useState([]);

  const renderTodoItem = ({item}) => (
    <TodoItem item={item} handleClickTodoItem={handleClickTodoItem} />
  );

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch('http://10.0.2.2:5000/todos');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };

    getTodos();
  }, []);

  return (
    <List
      data={todos}
      renderItem={renderTodoItem}
      ItemSeperatorComponent={Divider}
    />
  );
}
