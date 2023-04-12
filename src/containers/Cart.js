import React, { useContext } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import './cart.css'
import { collection, addDoc, getFirestore } from '@firebase/firestore'
import Swal from 'sweetalert2'
import { Formik } from 'formik';


const Cart = () => {
  const { cart, totals, removeProduct, clear } = useContext(CustomContext);
  const db = getFirestore();
  const collectionReference = collection(db, 'orders') //apunta a la coleccion creada en firebase

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
  const date = new Date().toLocaleString() + '';
  console.log(date);

  const handleRemoveProduct = (id) => {
    removeProduct(id)
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
                    <p className="text">Precio Final: {product.price * product.quantity}</p>
                  </div>
                  <button onClick={() => handleRemoveProduct(product.id)}>borrar</button>
                  {/* la funcion flecha creada arriba sirve para que la funcion no se llame a si misma muchas veces */}
                </div>
              );
            })}
          </div>
          <h1>Total:{totals.total}</h1>
          <hr></hr>
          <div>
            <h3>Completa tus datos para realizar tu pedido</h3>
            <Formik
              initialValues={{ email: '', name: '', address: '', phone: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const orderObject = {
                  buyer: {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    address: values.address,
                  },
                  date: date,
                  items: cart.map((element) => ({
                    id: element.id,
                    quantity: element.quantity,
                    price: element.price,
                    name: element.name
                  })),
                  total: totals.total,
                }
                setTimeout(() => {
                  addDoc(collectionReference, orderObject)
                    .then((response) => {


                      clear()
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tu compra ha sido realizada',
                        text: 'Va a llegar a tu domicilio en 24 horas, el ID de tu pedido es: ' + response.id,
                        showConfirmButton: false,
                        timer: 2000
                      })
                    })
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <br></br>
                  <label htmlFor="firstName">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <br></br>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <br></br>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <br></br>
                  <button style={style.boton} type="submit" disabled={isSubmitting}>
                    Confirmar compra
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <hr></hr>
          <button style={style.btnEliminar} onClick={alertRed}>Cancelar Compra</button>
        </>
      )}
    </>
  );
};

const style = {
  formulario: {
    marginTop: 20,
    marginLeft: 15,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    width: 200,
    fontSize: 20,
  },
  boton: {
    marginLeft: 15,
    width: 300,
    backgroundColor: 'rgb(6, 175, 0)',
    borderRadius: 5,
    fontSize: 25
  },
  btnEliminar: {
    marginLeft: 15,
    width: 300,
    backgroundColor: 'rgb(255, 17, 0)',
    borderRadius: 5,
    fontSize: 25
  }
}


export default Cart;