import React, {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = ({}) => {

    const [numeros, setNumeros] = useState (0);

    const handlerClick = () => {
        setNumeros (0)
    }

    const handlerClick2 = () => {
        setNumeros (numeros + 1)
    }


    return (
        <>
        <div className='contenedor_carrito'>
        <ShoppingCartIcon className='carrito' sx={{ fontSize: 50 }} />
        <p className='numero'>{numeros}</p>
        </div>

        
        </>
    )
}

export default CartWidget

