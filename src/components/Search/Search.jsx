import { useState } from "react";
import Button from "../Button/Button";
import style from "./Search.module.css";

function Search({setTask, setSelected, selected}) {
    const [valor, setValor] = useState("")
    const [contador, setContador] = useState(0)
    const [clean, setClean] = useState(false)
    

    function handleChange(event) {
        setValor(event.target.value)
    }

    function createButton(){
        if (valor.length > 0 && valor.length < 64){
            setTask({
                id:contador,
                title:valor,
                select:valor == selected
            })
            setContador(contador + 1)
        } else {
            alert("Número de caracteres inválidos! O título da sua tarefa deve ter entre 1 a 64 caracteres.")
        }
    }

    function searchButton(){
        if (clean){
            setSelected("")
            setClean(false)
        } else if (valor.length > 0 && valor.length < 64){
            setSelected(valor)
            setClean(true)
        } else {
            alert("Número de caracteres inválidos! O título da sua tarefa deve ter entre 1 a 64 caracteres.")
        }
    }
    
    return (
        <div className={style.searchBox}>
            <input type="text" placeholder="Busque sua tarefa" value={valor} onChange={handleChange}/>
            <div className={style.buttonBox}>
                <Button title="Criar" width="45%" margin="5px 0" click={createButton}/>
                <Button title={clean ? "Limpar pesquisa" : "Pesquisar"} width="45%" margin="5px 0" click={searchButton}/>
            </div>
        </div>
    );
}

export default Search;
