import { useEffect, useState } from "react"
import Search from "../Search/Search"
import "./Header.module.css"

function Header({listTasks, setListTasks}){
    const [task, setTask] = useState()
    useEffect(()=>{
        setListTasks([...listTasks, task])
    },[task])
    return (
        <header>
           <h1>Lista de Tarefas</h1> 
           <Search setTask={setTask}/> 
        </header>
    )
}

export default Header