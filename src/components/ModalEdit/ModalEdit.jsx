import { useEffect, useState } from "react";
import modalStyle from "./ModalEdit.module.css";
import Button from "../Button/Button";

function ModalEdit({ setTitle, show, setShow }) {
    const [display, setDisplay] = useState({ display: "none" })
    const [valor, setValor] = useState("")

    useEffect(() => {
        setDisplay(show ? { display: "flex" } : { display: "none" })
    }, [show])

    function handleChange(event) {
        setValor(event.target.value)
    }

    function closeModal() {
        setShow(!show)
        setValor("")
    }

    function editButton(){
        if (valor.length > 0 && valor.length < 64){
            setTitle(valor)
        } else {
            alert("Número de caracteres inválidos! O título da sua tarefa deve ter entre 1 a 64 caracteres.")
        }
        closeModal()
    }

    return (
        <>
            <div className={modalStyle.backgroundModal} style={display}></div>
            <div className={modalStyle.modal} style={display}>
                <h2>Digite o novo título da sua tarefa ou clique em cancelar para manter a atual</h2>
                <input type="text" value={valor} onChange={handleChange} />
                <div className={modalStyle.modalButton}>
                    <Button title="Editar" width="50%" click={editButton} />
                    <Button title="Cancelar" width="50%"  click={closeModal} />
                </div>
            </div>
        </>

    );
}

export default ModalEdit;
