import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TaskBox from './components/TaskBox/TaskBox'

function App() {
  const [listTasks, setListTasks] = useState([])
  const [deleteKey, setDeleteKey] = useState()


  useEffect(()=>{
    const newList = listTasks.filter((task)=>task.id != deleteKey)
    setListTasks(newList)
  },[deleteKey])
  return (
    <>
      <Header listTasks={listTasks} setListTasks={setListTasks}  />
      <TaskBox listTasks={listTasks} setDeleteKey={setDeleteKey} />
    </>
  )
}

export default App
