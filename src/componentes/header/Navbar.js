import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../CartWidget';

const Navbar = ({ name , carro }) => {

    return (
        <header>
            <nav className='barra_de_navegacion'>
                <a href="../../index.html"><img className='logo' src="../../one_piece.png" alt="Logo" /></a>
                <a href="../../index.html"><img className='titulo' src="../../titulo.png" alt="Logo" /></a>
                <div className="dropdown">
                    <button className="btn boton_productos" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </button>
                    <ul className="dropdown-menu productos_drop">
                        <li><a className="dropdown-item" href="#">Destacados</a></li>
                        <li><a className="dropdown-item" href="#">Nuevas Opciones</a></li>
                    </ul>
                </div>
                <a className='nav_categories' href="../">Ofertas</a>
                <a className='nav_categories' href="../">Preguntas</a>
                <a className='nav_categories' href="../">Contáctanos</a>
                <CartWidget cuenta={carro} />

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