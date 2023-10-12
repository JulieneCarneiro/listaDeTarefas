import { useEffect } from "react"
import TaskCard from "../TaskCard/TaskCard"
import style from "./TaskBox.module.css"

function TaskBox({listTasks, setDeleteKey}){
    useEffect(()=>{},[listTasks])

    return (
        <main>
            {listTasks.map((task)=> <TaskCard taskTitle={task.title} key={task.id} setDeleteKey={setDeleteKey} keyValue={task.id} select={task.select} /> )}
        </main>
    )
    
}

export default TaskBox