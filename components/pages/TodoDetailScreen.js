import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Card, Layout} from '@ui-kitten/components';

export default function TodoDetailScreen() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await fetch('http://10.0.2.2:5000/todos/1');
        const data = await res.json();
        setTodo(data);
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
