import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style ={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style ={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style ={{width: 50, height: 50, backgroundColor: 'green'}} />
    </View>
  );
}

