import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Icon, OverflowMenu, MenuItem} from '@ui-kitten/components';
import {TODO} from '../../redux/actionTypes';

export default function TodoItemMenu({todoId}) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleShowMenu = () => setVisible(true);

  const handleHideMenu = () => setVisible(false);

  const handleDeleteTodo = () => {
    dispatch({type: TODO.DELETE_TODO_REQUEST, id: todoId});
  };

  const renderMoreVerticalIcon = (props) => (
    <Icon {...props} name="more-vertical" />
  );

  const renderMenuIcon = () => (
    <Button
      appearance="ghost"
      onPress={handleShowMenu}
      accessoryLeft={renderMoreVerticalIcon}
    />
  );

  return (
    <OverflowMenu
      visible={visible}
      anchor={renderMenuIcon}
      onBackdropPress={handleHideMenu}>
      <MenuItem title="Edit" />
      <MenuItem title="Delete" onPress={handleDeleteTodo} />
    </OverflowMenu>
  );
}
