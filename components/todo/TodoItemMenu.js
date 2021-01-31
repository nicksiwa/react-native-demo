import React, {useState} from 'react';
import {Button, Icon, OverflowMenu, MenuItem} from '@ui-kitten/components';

export default function TodoItemMenu() {
  const [visible, setVisible] = useState(false);

  const handleShowMenu = () => setVisible(true);

  const handleHideMenu = () => setVisible(false);

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
      <MenuItem title="Delete" />
    </OverflowMenu>
  );
}
