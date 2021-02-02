import React from 'react';
import {useDispatch} from 'react-redux';
import {ListItem} from '@ui-kitten/components';
import {TODO} from '../../redux/actionTypes';
import TodoCheckbox from './TodoCheckbox';
import TodoItemMenu from './TodoItemMenu';

export default function TodoItem({
  item,
  handleClickTodoItem,
  handleClickEditTodo,
}) {
  const {id, title, completed} = item;
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch({type: TODO.TOGGLE_TODO_REQUEST, id: id, isChecked: !completed});
  };

  const renderTodoCheckbox = () => (
    <TodoCheckbox checked={completed} onChange={handleToggleTodo} />
  );

  const renderMenu = () => (
    <TodoItemMenu todoId={id} handleClickEditTodo={handleClickEditTodo} />
  );

  return (
    <ListItem
      title={title}
      onPress={() => handleClickTodoItem(id)}
      accessoryLeft={renderTodoCheckbox}
      accessoryRight={renderMenu}
    />
  );
}
