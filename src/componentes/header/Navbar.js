import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from './CartWidget';
import NavCategories from './NavCategories';
import {Link} from "react-router-dom";

const Navbar = ({ name }) => {

    return (
        <header>
            <nav className='barra_de_navegacion'>
                <Link to={'/'}><img className='logo' src="../../one_piece.png" alt="Logo" /></Link>
                <Link to={'/'}><img className='titulo' src="../../titulo.png" alt="Logo" /></Link>
                <div className='nav_categories'>
                <NavCategories/>
                </div>

                
                <Link to={'/cart'}><CartWidget/></Link>
                
                

                <div>
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='contenedor_cuenta'>
                            <AccountCircleIcon className='cuenta' sx={{ fontSize: 50 }} />
                            <p className='saludo'>Bienvenido/a {name}</p>
                        </div>
                    </button>
                    <ul className="dropdown-menu bg-danger">
                        <li><a className="dropdown-item" href="#">Cerrar Cuenta</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar