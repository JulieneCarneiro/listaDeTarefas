import Search from "../Search/Search"
import "./Header.module.css"

function Header(){
    return (
        <header>
           <h1>Lista de Tarefas</h1> 
           <Search /> 
        </header>
    )
}

export default Header