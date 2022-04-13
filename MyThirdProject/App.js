import { React, useState } from 'react';
import { Text, View, Button } from 'react-native';

function TV(props) {

  const [isOff, setIsOff] = useState(true);

  return(
  <View>
    <Text>
      {"\n\n\n\n"}
      This is the {props.name} TV, and it is {isOff ? "OFF" : "turned on"}!
    </Text>
    <Button
      onPress={() => {
        setIsOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "Turn me on, please" : "Thank you"}
    />
  </View>
);
}

export default function multiTVs() {
  return (
    <View>
      <TV name = "LG"/>
      <TV name = "Samsung"/>
      <TV name = "Sony"/>
    </View>
  );
  }