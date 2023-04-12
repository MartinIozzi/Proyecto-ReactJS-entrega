import React, { useContext } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import './cart.css'
import {collection, addDoc, getFirestore} from '@firebase/firestore'
import Swal from 'sweetalert2'


const Cart = () => {
  const { cart, totals, removeProduct, clear } = useContext(CustomContext);
  const db = getFirestore();
  const collectionReference = collection (db, 'orders') //apunta a la coleccion creada en firebase

  const alert = () => {
    clear()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu compra ha sido realizada',
      showConfirmButton: false,
      timer: 2000
    })
  }
  const alertRed = () => {
    clear()
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Tu compra ha sido cancelada',
      showConfirmButton: false,
      timer: 2000
    })
  }
  const date = new Date().toLocaleString + ' ';
  const orderObject = {
    buyer: {
      name: "Pepito Paredes",
      email: "pepito@hotmail.com",
      phone: 1168788227,
      address: "av. corrientes 123",
    },
    date: date
  }

  const handleRemoveProduct = (id) => {
    removeProduct(id)
  }

  const handleCheckout = () => {

  }

  return (
    <>
      {!cart.length ? (
        <>
          <p className="parrafo-carrito">
            No se agregaron productos en el carrito. Para agregar haz click <Link to={"/"}>aquí</Link>
          </p>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div className="estructura" key={product.id}>
                  <img className="tamano-img" src={product.img}></img>
                    <div className="general-text">
                      <p className="text">Precio: {product.price}</p>
                      <p className="text">Cantidad: {product.quantity}</p>
                      <p className="text">Precio Total: {totals.total}</p>
                    </div>
                    <button onClick={() => handleRemoveProduct(product.id)}>borrar</button> 
                    {/* la funcion flecha creada arriba sirve para que la funcion no se llame a si misma muchas veces */}
                </div>
              );
            })}
          </div>
            <button style={style.boton} onClick={alert}>Comprar</button>
            <button style={style.btnEliminar} onClick={alertRed}>Cancelar Compra</button>
        </>
      )}
    </>
  );
};

const style = {
  formulario:{
    marginTop: 20,
    marginLeft: 15,
    backgroundColor:'lightblue',
    borderRadius: 5,
    width: 200,
    fontSize: 20,
  },
  boton: {
    marginLeft: 15,
    width: 300,
    backgroundColor:'rgb(6, 175, 0)',
    borderRadius: 5,
    fontSize: 25
  },
  btnEliminar: {
    marginLeft: 15,
    width: 300,
    backgroundColor:'rgb(255, 17, 0)',
    borderRadius: 5,
    fontSize: 25
  }
}


export default Cart;