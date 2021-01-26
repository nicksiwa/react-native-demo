import React from 'react';
import {ListItem} from '@ui-kitten/components';

export default function TodoItem({item, handleClickTodoItem}) {
  const {id, title, completed} = item;

  return (
    <ListItem
      title={title}
      description={completed ? 'Completed' : 'Incomplete'}
      onPress={() => handleClickTodoItem(id)}
    />
  );
}
