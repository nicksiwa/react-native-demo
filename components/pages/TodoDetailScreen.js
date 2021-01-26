import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Card, Layout} from '@ui-kitten/components';
import {getTodoById} from '../../services';

export default function TodoDetailScreen({route}) {
  const {todoId} = route.params;
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await getTodoById(todoId);
        setTodo(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTodo();
  }, []);

  return (
    <Layout>
      <Card>
        <Text>{todo && todo.title}</Text>
        <Text>{todo && todo.completed ? 'Completed' : 'Incomplete'}</Text>
      </Card>
    </Layout>
  );
}
