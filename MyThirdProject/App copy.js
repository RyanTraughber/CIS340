import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hi, my name is {props.name}, I am a student in CIS340</Text>
    </View>
  );
}

export default function multiComp() {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome TO CIS340
      </Text>
      <Student name = "Ryan Traugber"/>
      <Student name = "Alice Wonderland"/>
      <Student name = "Bob Tomato"/>
      <Student name = "Jon Arbuckle"/>
    </View>
  );

}