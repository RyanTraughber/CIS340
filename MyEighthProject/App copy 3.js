import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source ={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}} style={styles.logo}/>
      <Text style ={styles.instructions}>
        Press the button below to select an image on your phone!
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
          <Text style ={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#48D1CC",
  },

  button: {
    backgroundColor: "#66CDAA",
    padding: 20,
    borderRadius: 5
  },

  instructions: {
    fontSize: 18,
    color: "#9370DB",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  
  buttonText:{
    fontSize: 20,
    color: "#C71585"
  }
});
