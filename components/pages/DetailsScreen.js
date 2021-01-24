import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DetailsScreen({navigation, route}) {
  const {itemId} = route.params;

  navigation.setOptions({title: 'Updated!'});

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Item ID : {itemId}</Text>
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
