import "./button.css"

function Button({ txt, type, onclick }) {

    return <button type={type} onClick={onclick}>{txt}</button>

}

export default Button;