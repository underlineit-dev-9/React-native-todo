import React from 'react';
import { useState } from 'react';
import { View,Button, StyleSheet, Text,TextInput } from 'react-native';
import MyFunctionalComponent from './MyFunctionalComponent';


const App: React.FC = () => {
  const [tasks, setTasks] = useState(['task 1','task 2','task 3','task 4']);
  const [newTask,setNewTask] = useState('')

  function deleteHandler(index:any) {
    const tempArray = tasks.filter((element:any) => {
      return tasks.indexOf(element) !== index;
    });
    setTasks(tempArray)
  }
  function submitHandler(index:number,editedTask:any) {

    setTasks([...tasks.slice(0,index),editedTask,...tasks.slice(index+1)])
    
  }

  return (
    <View  style={styles.container}>
      <Text>Todo Management System</Text>
      <TextInput
            value={newTask}
            placeholder="Enter your task"
            onChangeText={text=>{setNewTask(text)}}
            /> 
            <Button
            title='Add'
            accessibilityLabel='submiting task'
            onPress={()=>{setTasks([...tasks,newTask])
            setNewTask('')}} 
            />

      {tasks.map((task:any,index:any)=>(
        <MyFunctionalComponent task={task} index={index} onPress1={deleteHandler} onPress2={submitHandler}/>
      ))}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


export default App;
