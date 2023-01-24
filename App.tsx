import React from 'react';
import {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyFunctionalComponent from './MyFunctionalComponent';

const App: React.FC = () => {
  let i = 1;
  const [tasks, setTasks] = useState([
    {task: 'task 1', taskId: i++},
    {task: 'task 2', taskId: i++},
    {task: 'task 3', taskId: i++},
    {task: 'task 4', taskId: i++},
  ]);
  const [newTask, setNewTask] = useState('');

  function deleteHandler(index: any) {
    const tempArray = tasks.filter((element: any) => {
      return tasks.indexOf(element) !== index;
    });
    setTasks(tempArray);
  }
  function submitHandler(index: number, editedTask: any) {
    let tempObject = [];
    for (let element of tasks) {
      if (tasks.indexOf(element) === index) {
        element.task = editedTask;
      }
      tempObject.push(element);
    }
    setTasks(tempObject);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo Management System</Text>
      <View style={styles.flex}>
        <TextInput
          style={styles.inputBoxAdd}
          value={newTask}
          placeholder="Enter your task"
          onChangeText={text => {
            setNewTask(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setTasks([...tasks, {task: newTask, taskId: i++}]);
            setNewTask('');
          }}>
          <Image
            style={{height: 30, width: 30, marginLeft: 13, marginBottom: 20}}
            source={require('./icons/add.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        {tasks.map((element: any, index: any) => (
          <MyFunctionalComponent
            task={element.task}
            key={element.taskId}
            index={index}
            onPress1={deleteHandler}
            onPress2={submitHandler}
          />
        ))}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({

  heading: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 30,
    color:'#000'
          },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 1,
    width: 150,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputBoxAdd: {
    borderWidth: 1,
    width: 200,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  images: {
    height: 30,
    width: 30,
    marginLeft: 13,
  },
  taskDisplay: {
    fontWeight: '500',
    fontSize: 18,
  },
});

export default App;
