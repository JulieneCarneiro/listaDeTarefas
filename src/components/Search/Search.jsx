import { useState } from "react";
import Button from "../Button/Button";
import style from "./Search.module.css";

function Search({setTask}) {
    const [valor, setValor] = useState("")
    const [contador, setContador] = useState(0)

    function handleChange(event) {
        setValor(event.target.value)
    }

    function createButton(){
        if (valor.length > 0 && valor.length < 64){
            setTask({
                id:contador,
                title:valor
            })
            setContador(contador + 1)
        } else {
            alert("Número de caracteres inválidos! O título da sua tarefa deve ter entre 1 a 64 caracteres.")
        }
    }
    return (
        <div className={style.searchBox}>
            <input type="text" placeholder="Busque sua tarefa" value={valor} onChange={handleChange} />
            <div className={style.buttonBox}>
                <Button title="Criar" width="45%" margin="5px 0" click={createButton}/>
                <Button title="Pesquisar" width="45%" margin="5px 0" />
            </div>
        </div>
    );
}

export default Search;
