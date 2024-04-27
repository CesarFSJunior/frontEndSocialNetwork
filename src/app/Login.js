import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import './login.css'
import Button from "./utils/Button";

function Login() {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    function sendLogin(values) {

        fetch("https://localhost:7093/api/Users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(res => res.json())
        .then(data => {
            document.cookie = `userName=${encodeURIComponent(JSON.stringify(data.name))}; path=/`;
            navigate('/profile/' + data.id)
        })
        .catch(err => console.log(err))

    }

    return (
        <section onSubmit={handleSubmit(sendLogin)}>
            <form className="LoginForm">
                <h2>Login</h2>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="email" {...register("email", {required: true})} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="password" {...register("password", {required: true})} />
                <Button txt={"Enviar"} type={"submit"} />
            </form>
        </section>
    )
}

export default Login;