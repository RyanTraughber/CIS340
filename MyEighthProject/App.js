import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';// import image picker
import * as Sharing from 'expo-sharing'; // import image share

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});

  };

  let openSharingDialogAsync = async () => {

    if (!(await Sharing.isAvailableAsync())){
      alert('Sharing is not available on my phone');
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);

  };

  //display the selected image
  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}} style={styles.selImage}/>
        <TouchableOpacity onPress ={openSharingDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share My Photo</Text>
        </TouchableOpacity>
      </View>
    )
  }



  //end of the code
  return (
    <View style={styles.container}>
      <Image source ={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}} style={styles.logo}/>
      <Text style ={styles.instructions}>
        Press the button below to select an image on your phone!
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
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
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
