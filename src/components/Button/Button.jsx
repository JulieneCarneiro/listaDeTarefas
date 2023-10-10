import "./Button.module.css"

function Button({title, click, color, borderColor, height, width, margin, backgroundColor}){
    const styleDefault = {
        color:color || "rgb(247,247,247)",
        borderColor:borderColor || "rgb(247,247,247)",
        height:height || "37px",
        width:width || "74px",
        margin:margin || "0",
        backgroundColor:backgroundColor || "rgb(27,27,27)",
        borderRadius:"10px"
    }
    
    return (
        <button 
        style={styleDefault}
        onClick={click}
        >{title}</button>
    )
}

export default Button 