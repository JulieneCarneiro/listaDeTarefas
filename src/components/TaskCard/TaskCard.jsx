import Button from "../Button/Button"
import ModalEdit from "../ModalEdit/ModalEdit"
import styleCard from "./TaskCard.module.css"
import { useState } from "react"

function TaskCard({ taskTitle, setDeleteKey, keyValue}) {
    const [check, setCheck] = useState(false)
    const [title, setTitle] = useState(taskTitle)
    const [openModal, setOpenModal] = useState(false)
    const iconStyle = {
        backgroundColor: check ? "rgb(41, 226, 20)" : "rgb(128,128,128)"
    }
    const textCheck = check ? "Desmarcar" : "Concluir"
    return (
        <>
            <div className={styleCard.card}>
                <div className={styleCard.check} style={iconStyle} title="Status check"></div>
                <p>{title}</p>
                <div className={styleCard.buttonsCard}>
                    <Button title="Editar" width="90%" click={() => setOpenModal(!openModal)} />
                    <Button title="Excluir" width="90%" click={() => setDeleteKey(keyValue)} />
                    <Button title={textCheck} width="90%" click={() => setCheck(!check)} />
                </div>
            </div>
            <ModalEdit setTitle={setTitle} show={openModal} setShow={setOpenModal} />
        </>
    )
}

export default TaskCard