import { Link } from "react-router-dom";

function UserCard({ user }) {
    return (
        <div>
            <Link to={"/profile/" + user.id}>
                <h2>{user.name}</h2>
            </Link>
        </div>
    )
}

export default UserCard;