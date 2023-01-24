import React from 'react';
import { useState } from 'react';
import { View,Button, StyleSheet, Text,TextInput } from 'react-native';
import MyFunctionalComponent from './MyFunctionalComponent';


const App: React.FC = () => {
  let  i=1;
  const [tasks, setTasks] = useState([{task:'task 1',taskId:i++},{task:'task 2',taskId:i++},{task:'task 3',taskId:i++},{task:'task 4',taskId:i++}]);
  const [newTask,setNewTask] = useState('')

  function deleteHandler(index:any) {
    const tempArray = tasks.filter((element:any) => {
      return tasks.indexOf(element) !== index;
    });
    setTasks(tempArray)
  }
  function submitHandler(index:number,editedTask:any) {
    let tempObject=[]
    for(let element of tasks){
      if(tasks.indexOf(element)===index){
        element.task=editedTask;
      }
      tempObject.push(element)
    }
    setTasks(tempObject)
    
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
            onPress={()=>{setTasks([...tasks,{task:newTask,taskId:i++}])
            setNewTask('')}} 
            />

      {tasks.map((element:any,index:any)=>(
        <MyFunctionalComponent task={element.task} key={element.taskId} index={index} onPress1={deleteHandler} onPress2={submitHandler}/>
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
