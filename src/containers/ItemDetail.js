import React, {useState, useContext} from 'react'
import ItemCount from "../componentes/header/ItemCount"
import { CustomContext } from '../context/CustomContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ product }) => {
    const [clickearBoton, setClickearBoton] = useState(false);
    const {addProduct} = useContext(CustomContext)

    const onAdd = (count) => {
      setClickearBoton(true)
      addProduct(product, count)
    }
  
  return (
  <>
    <div className='container'>
      <div>
      <h1 className='data1'>{product.name}</h1>
        <img style={styles.img} src={product.img} alt={product.name}></img>
      </div>
      <div className='data'>
      <h2>Envio a todo el país</h2>
      <p>Stock Disponible: {product.stock} productos</p>
      <p>Precio: ${product.price}</p>
      {clickearBoton ? (
          <Link to="/cart">
            <button className="boton-fin-compra">Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  </>
  )
}

const styles = {
  img: {
    width: 450,
  }
}

export default ItemDetail

