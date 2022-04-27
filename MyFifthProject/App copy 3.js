import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={{flex: 1}}>
      <View style ={{flex: 1, backgroundColor: 'red'}} />
      <View style ={{flex: 1, backgroundColor: 'skyblue'}} />
      <View style ={{flex: 1, backgroundColor: 'purple'}} />
    </View>
  );
}

