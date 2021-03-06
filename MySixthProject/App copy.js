import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brandslogos.com/wp-content/uploads/images/large/csu-rams-logo.png",
    width: 80,
    height: 80
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.jpg')}>
      </Image>

      <Image
        style={styles.urlCSULogo}
        source={{
          uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png"
        }}>
      </Image>

      <Image style={styles.stretchLogo} source={csuLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    height: 200,
    resizeMode: 'center' 
  }
});
