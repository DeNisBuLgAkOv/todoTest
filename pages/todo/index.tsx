import React, { useState} from 'react';
import AddItemForm from "./AddItemForm";
import {v1} from "uuid";
import Task from "./Task";
import {useRouter} from "next/router";
import LocalStorageHook from "./LocalStorageHook";



export type newTaskType={
    id:string
    title:string,
    isDone:boolean
}

function Todo() {

  const router = useRouter()
  const navigateTodo = (way:string) => {
    router.push(way)
  }

  let [tasks,setTasks] =  LocalStorageHook()
    let [filter,setFilter] = useState<string>('all')

    const changeFilter = (filter:string) => {
        setFilter(filter)
     }
    const addTask = (title:string) => {
        if (title) {
            const newTask:newTaskType = {
                id: v1(), title, isDone:false
            }
            setTasks([...tasks, newTask])
        }
    }
    const deleteTaskHandler = (id:string) => {
      setTasks(tasks.filter(t => t.id !== id))
    }

    const changeStatusTask =(id:string, isDone:boolean)=>{
      setTasks(tasks.map(t => t.id === id ? {...t,isDone: isDone} : t))
    }

  let newTask =[...tasks]
  if(filter ==="active"){
    newTask=  tasks.filter(t => t.isDone === false)
  }
  else if(filter ==="completed"){
    newTask = tasks.filter(t => t.isDone === true)
  }

  return (

    <div className="App">
        <div className="logo">
            <h1>todos</h1>
        </div>
        <AddItemForm addTask={addTask}/>
        <div className="list">
            {
              newTask.map(task => { return <Task key={task.id} deleteTask = {deleteTaskHandler}  changeStatusTask={changeStatusTask} task={task}/> })
            }
        </div>

        <div className={"menu"}>
          <span className={filter ==="all" ? "active": ''} onClick={()=>changeFilter('all')} >All</span>
          <span className={filter ==="active" ? "active": ''}  onClick={()=>changeFilter('active')} >Active</span>
          <span className={filter ==="completed" ? "active": ''}  onClick={()=>changeFilter('completed')} >Completed</span>
        </div>
      <button className={"btn_way"}  onClick={()=>navigateTodo('/')}>Move back</button>
    </div>
  );
}

export default Todo;
