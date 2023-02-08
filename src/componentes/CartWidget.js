import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = ({cuenta}) => {
    return (
        <>
        <div className='contenedor_carrito'>
        <ShoppingCartIcon className='carrito' sx={{ fontSize: 50 }} />
        <p className='numero'>{cuenta}</p>
        </div>
        </>
    )
}

export default CartWidget

