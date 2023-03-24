import React, { useContext } from "react";
import { Link } from "react-router-dom";



//carrito, caracteristicas, todavia esto no está en uso
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

export default Cart;