import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CustomContext } from "../../context/CustomContext";
import './Navbar.css';



const CartWidget = ({}) => {

    const { totals } = useContext(CustomContext);

    return (
        <div className='contenedor_carrito'>
        <ShoppingCartIcon sx={{ fontSize: 50 }} />
        <p className='numero'>{totals.qty}</p>
        </div>
    )
}

export default CartWidget

