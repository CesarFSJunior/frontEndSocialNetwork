import { useState, useEffect} from 'react'
import UserCard from './UserCard'
import Button from './utils/Button'
import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate()

    const [users, changeUsers] = useState([])

    useEffect(() => {
        fetch('https://localhost:7093/api/Users', {
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json())
        .then(data => changeUsers(data))
        .catch(err => console.log(err))
    }, []) 

    function re() {
        navigate('/profile')
    }

    return (
        <section>
           <h1>Home</h1>
           <Button txt={'redirect'} onclick={re} />
           {
           users ? 
           users.map(u => (
            <UserCard user={u} />
           ))
           :
           <p>Loading</p>
        }
        </section>
    )
}

export default Main;