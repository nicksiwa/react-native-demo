import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  const handleNavigate = () => {
    navigation.navigate('Details', {
      itemId: 100,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={handleNavigate} />
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
