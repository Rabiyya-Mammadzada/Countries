import '../App.css';
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/countries"> Countries </Link></li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Navbar;