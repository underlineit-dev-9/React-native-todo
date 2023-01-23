import React from 'react';
import {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
interface Props {
  task: string;
  index: number;
  onPress1: (arg: number) => void;
  onPress2: (arg1: number, arg2: string) => void;
}

//   onPress:()=>void;

const MyFunctionalComponent: React.FC<Props> = props => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(props.task);
  return (
    <View>
      {canEdit ? (
        <View>
          <TextInput
            value={editedTask}
            onChangeText={text => {
              setEditedTask(text);
            }}
          />
          <Button
            title="Submit"
            accessibilityLabel="submiting task"
            onPress={() => {
              props.onPress2(props.index, editedTask);
              setCanEdit(false);
            }}
            color="green"
          />
          <Button
            title="Cancel"
            accessibilityLabel="submiting task"
            onPress={() => setCanEdit(false)}
            color='orange'
          />
        </View>
      ) : (
        <View>
          <Text>
            {props.index + 1} {props.task}
          </Text>
          <Button
            title="Edit"
            accessibilityLabel="decrement"
            onPress={() => setCanEdit(true)}
            color="blue"
          />
          <Button
            title="Delete"
            accessibilityLabel="decrement"
            onPress={() => props.onPress1(props.index)}
            color="red"
          />
        </View>
      )}
    </View>
  );
};

export default MyFunctionalComponent;
