import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Just Red Text</Text>
      <Text style={styles.largeGreen}>This is Big Green</Text>
      <Text style={[styles.red, styles.largeGreen]}>Red Text, then Big Green Text</Text>
      <Text style={[styles.largeGreen, styles.red]}>Big green, then red text</Text>
    </View>
  );
}

const styles = StyleSheet.create({

container : {
  marginTop: 60

},
largeGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 30
},
red: {
  color: 'red', //I can't read the yellow text on my phone so I'm just going to make it red
  fontSize: 20
}
});