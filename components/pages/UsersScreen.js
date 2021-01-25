import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';

export default function UsersScreen() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('Hi');
  }, [number]);

  const handleSetNumber = () => setNumber(number + 1);

  return (
    <View style={styles.container}>
      <Text>Users Screen</Text>
      <Text>{number}</Text>
      <Button onPress={handleSetNumber}>Click Me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
