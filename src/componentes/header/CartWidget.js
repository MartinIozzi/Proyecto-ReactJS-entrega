import React, {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = ({}) => {

    const [numeros, setNumeros] = useState (0);

    return (
        <div className='contenedor_carrito'>
        <ShoppingCartIcon sx={{ fontSize: 50 }} />
        <p className='numero'>{numeros}</p>
        </div>
    )
}

export default CartWidget

