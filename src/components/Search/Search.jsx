import Button from "../Button/Button";
import style from "./Search.module.css";

function Search() {
    return (
        <div className={style.searchBox}>
            <input type="text" placeholder="Busque sua tarefa" />
            <div className={style.buttonBox}>
                <Button title="Criar" width="45%" margin="5px 0"/>
                <Button title="Pesquisar" width="45%" margin="5px 0" />
            </div>
        </div>
    );
}

export default Search;
