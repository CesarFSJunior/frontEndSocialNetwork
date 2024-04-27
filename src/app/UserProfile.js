import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function UserProfile() {

    const userId = useParams().id || '30b773eb-0c3e-4b78-bb39-bcf7677560d4'

    const [user, updateUser] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7093/api/Users/"+userId, {
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => updateUser(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <section>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.birthday}</p>
        </section>
    )
}

export default UserProfile;
