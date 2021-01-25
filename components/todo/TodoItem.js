import React from 'react';
import {ListItem} from '@ui-kitten/components';

export default function TodoItem({item, handleClickTodoItem}) {
  const {title, completed} = item;

  return (
    <ListItem
      title={title}
      description={completed ? 'Completed' : 'Incomplete'}
      onPress={() => handleClickTodoItem('todo id')}
    />
  );
}
