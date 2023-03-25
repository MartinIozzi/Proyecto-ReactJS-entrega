import React, { useContext, useState } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import './cart.css'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from 'sweetalert2'
import ItemCount from "../componentes/header/ItemCount";

const Cart = () => {
  const { cart, totals } = useContext(CustomContext);

  const alert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu compra ha sido realizada',
      showConfirmButton: false,
      timer: 2000
    })
  }
  const alertRed = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Tu compra ha sido cancelada',
      showConfirmButton: false,
      timer: 2000
    })
  }

  const handlerClickSell = () => {
    const sellCollection = collection(db, "sells");
    addDoc(
      sellCollection,
      {
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
    )
    .then(result=>console.log(result.id))
  };



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


/*import React, { useContext } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
const cart = ()=> {

return (
  <>
  <div>
  {cart.map((product) => {
   <h1 key={product.id}>{product.title}</h1>;
  })}
</div>
  <nav>
      {
          (cart.map((category) =>{
              return(
                  <Link key={category.id} style={styles.categories} to={category.route}>
                      {category.name}
                  </Link>
              );
          }))
      }
  </nav>
  </>
)
}

const styles = {
  categories: { 
      paddingLeft: 100,
      marginRight: 30,
      fontSize: 30,
      color: "black",
      textDecoration: "none",
  }
}
}

export default Cart; */