import { useEffect, useState } from "react"
import Search from "../Search/Search"
import "./Header.module.css"

function Header({ listTasks, setListTasks }) {
    const [task, setTask] = useState()
    const [selected, setSelected] = useState()
    
    useEffect(() => {
        setListTasks([...listTasks, task])
    }, [task])

    useEffect(() => {
        const listSelected = listTasks.map((task)=>{
            if (task.title == selected) {
                return {
                    title:task.title,
                    id:task.id,
                    select:true
                }
            }
            return {
                title:task.title,
                id:task.id,
                select:false
            }
        })
        setListTasks(listSelected)
    }, [selected])
    return (
        <header>
            <h1>Lista de Tarefas</h1>
            <Search setTask={setTask} setSelected={setSelected} selected={selected} />
        </header>
    )
}

export default Header