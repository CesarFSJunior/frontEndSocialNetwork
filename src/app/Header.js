import './header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <h1>
                <Link to={'/'}>Logo</Link>
            </h1>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/profile'}>Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;