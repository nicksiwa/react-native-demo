import React from 'react';
import {useDispatch} from 'react-redux';
import {ListItem} from '@ui-kitten/components';
import TodoCheckbox from './TodoCheckbox';
import {TODO} from '../../redux/actionTypes';

export default function TodoItem({item, handleClickTodoItem}) {
  const {id, title, completed} = item;
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch({type: TODO.TOGGLE_TODO_REQUEST, id: id, isChecked: !completed});
  };

  const renderTodoCheckbox = () => (
    <TodoCheckbox checked={completed} onChange={handleToggleTodo} />
  );

  return (
    <ListItem
      title={title}
      description={completed ? 'Completed' : 'Incomplete'}
      onPress={() => handleClickTodoItem(id)}
      accessoryRight={renderTodoCheckbox}
    />
  );
}
