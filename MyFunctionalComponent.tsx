import React from 'react';
import {useState} from 'react';
import {Text, View, Button, TextInput,Image,TouchableOpacity} from 'react-native';
import { styles } from './App';
interface Props {
  task: string;
  key:number;
  index: number;
  onPress1: (arg: number) => void;
  onPress2: (arg1: number, arg2: string) => void;
  // sourse:any;
}


const MyFunctionalComponent: React.FC<Props> = props => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(props.task);
  return (
    <View >
      {canEdit ? (
        <View style={styles.flex}>
          <TextInput style={styles.inputBox}
            value={editedTask}
            onChangeText={text => {
              setEditedTask(text);
            }}
          />
            <TouchableOpacity  onPress={() => {
              props.onPress2(props.index, editedTask);
              setCanEdit(false);
            }}>
                <Image style={styles.images} source={require('./icons/submit.png')} />
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => setCanEdit(false)}>
                <Image style={styles.images} source={require('./icons/cancel.png')} />
            </TouchableOpacity>
        </View>
      ) : (
        <View >
          <View >
          <Text style={styles.taskDisplay} >
            {props.index + 1} {props.task}
          </Text>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity  onPress={() => setCanEdit(true)}>
                <Image style={{height:40,width:40}} source={require('./icons/edit.png')} />
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => props.onPress1(props.index)}>
                <Image style={styles.images} source={require('./icons/delete.png')} />
            </TouchableOpacity>
      </View>
        </View>
      )}
    </View>
  );
};

export default MyFunctionalComponent;
