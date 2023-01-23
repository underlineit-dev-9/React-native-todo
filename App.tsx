import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Task from './task';


export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0,
}) => {
 
  const [tasks, setTasks] = useState(['task 1','task 2','task 3','task 4']);
  const [newTask, setNewTask] = useState("hii");
  const [canEdit,setCanEdit] = useState(false);
  const [editedTask,setEditedTask]=useState('')

  function deleteHandler(index:any) {
    const tempArray =tasks.filter((element) => {
      return tasks.indexOf(element) !== index;
    });
    
    setTasks(tempArray);
  }
  function submitHandler(newTask:any, index:number) {
    
    
    
    setTasks([tasks.slice(0,index),newTask,tasks.slice(index+1)])
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Todo Management System s{name}
      </Text>
  
      <TextInput style={{borderWidth:1}} value={newTask} placeholder={'enter a text'} onChangeText={text=>setNewTask(text)} />

      <Button
          title="Add"
          accessibilityLabel=""
          onPress={()=>{setTasks([...tasks,newTask])
          setNewTask("")}}
          color="green"
        />
      <View>
        {tasks.map((task, index) => (
          <View>
            {canEdit?(<View>
              <TextInput style={{borderWidth:1}} value={task} placeholder={'enter a text'} onChangeText={text=>setEditedTask(text)} />
              <Button
          title="Submit"
          accessibilityLabel=""
          onPress={()=>{submitHandler(editedTask,index)
          setEditedTask("")
        setCanEdit(false)}}
          color="green"
        />
        <Button
          title="Cancel"
          accessibilityLabel=""
          onPress={()=>{setCanEdit(false)}}
          color="red"
        />
            </View>):(<View>
            <Text>{index+1} { " "}{task}</Text>
            <Button
          title="Delete"
          accessibilityLabel=""
          onPress={()=>deleteHandler(index)}
          color="red"
        />
        <Button
          title="Edit"
          accessibilityLabel=""
          onPress={()=>editHandler(index)}
          color="red"
        />
            </View>
            
          )}
      </View>
      
      
    
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default App;