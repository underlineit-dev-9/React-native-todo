import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  name: string;
  age: number;
}

const MyFunctionalComponent: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </View>
  );
}

export default MyFunctionalComponent;
