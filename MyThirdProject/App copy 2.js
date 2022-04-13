import { React } from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  let pic = {uri: 'https://i.imgur.com/42wAdRQ.jpeg'};

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello, this was my dog</Text>
    </View>
  );
}
