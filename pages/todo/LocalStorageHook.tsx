import React, {useEffect} from 'react';
import {useState} from 'react'



interface Task  {
  id: string,
  title:string,
  isDone:boolean
}

const LocalStorageHook = ():[Task[],(l: Task[])=>void] => {

  useEffect(()=>{
    if(window.localStorage.getItem('list')){
      const getStorageList = window.localStorage.getItem('list') && JSON.parse(localStorage.getItem('list') as string)
      setList(getStorageList)
    }
    else {
      setList([])
    }
  },[])


  const [list, setList] = useState<Task[]>([])

  const setStorageList = (l:Task[]) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem('list',JSON.stringify(l))
    }
    setList(l)
  }
   return[list, setStorageList]

};

export default LocalStorageHook;