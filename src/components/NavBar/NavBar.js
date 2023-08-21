import NavBar from './NavBar.css';
import CartWidget from "../CardWidget/CardWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
             <h3>Años Dorados</h3>   
            </Link>
            
            <div className='Categories'>
                <NavLink to={`/category/Cuidado e Higiene`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cuidado e Higiene</NavLink>
                <NavLink to={`/category/Alimentacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimentacion</NavLink>
                <NavLink to={`/category/Ortopedia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ortopedia</NavLink>
            </div>

        <CartWidget />
        </nav>
    )

}

export default NavBar