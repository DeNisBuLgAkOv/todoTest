import React, { useState} from 'react';
import AddItemForm from "./AddItemForm";
import {v1} from "uuid";
import Task from "./Task";
import {useRouter} from "next/router";



export type newTaskType={
    id:string
    title:string,
    isDone:boolean
}

function Todo() {

  const router = useRouter()
  const navigateTodo =(way:string) => {
    router.push(way)
  }

    let [tasks,setTasks] = useState<Array<newTaskType>>([])

    const addTask=(title:string)=>{
        if(title) {
            const newTask:newTaskType = {
                id: v1(), title, isDone:false
            }
            setTasks([...tasks, newTask])
        }
    }

  return (

    <div className="App">
        <div className="logo">
            <h1>todos</h1>
        </div>
        <AddItemForm addTask={addTask}/>
        <div className="list">
            {  
               tasks.map(task => { return <Task task={task}/> })
            }
        </div>

        <div className={"menu"}>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
      <button  onClick={()=>navigateTodo('/')}>Move back</button>
    </div>
  );
}

export default Todo;
